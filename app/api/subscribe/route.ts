import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// 🧠 In-memory store (⚠️ replace with DB in production)
type Subscriber = {
  email: string;
  createdAt: number;
  source: string;
};

const subscribers = new Map<string, Subscriber>();

// 🎨 Email Wrapper
const emailWrapper = (content: string, dark = false) => `
  <div style="
    font-family:Segoe UI,Arial;
    padding:40px;
    background:${dark ? "#020617" : "#f8fafc"};
  ">
    <div style="
      max-width:620px;
      margin:auto;
      background:${dark ? "#0f172a" : "#ffffff"};
      border-radius:16px;
      padding:32px;
      box-shadow:${dark
        ? "0 0 40px rgba(34,197,94,0.15)"
        : "0 10px 30px rgba(0,0,0,0.05)"};
    ">
      ${content}
    </div>
  </div>
`;

// 🎨 Templates
const adminTemplate = (email: string) =>
  emailWrapper(
    `
    <h2 style="color:#22c55e;">🚀 New Subscriber Joined</h2>
    <p>A new user has joined your platform.</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
  `,
    true
  );

const userTemplate = (email: string) =>
  emailWrapper(`
    <h2 style="color:#16a34a;">Welcome 🎉</h2>
    <p>You're now part of something meaningful.</p>
    <p>Subscribed as: ${email}</p>
  `);

// 🔍 Email validation
const validateEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// 🚀 Transporter (FIXED)
const createTransporter = () => {
  const EMAIL_USER = process.env.EMAIL_USER;
  const EMAIL_PASS = process.env.EMAIL_PASS;

  if (!EMAIL_USER || !EMAIL_PASS) {
    throw new Error("EMAIL ENV missing");
  }

  return nodemailer.createTransport({
    service: "gmail", // ✅ IMPORTANT FIX
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });
};

// 🎯 API HANDLER
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = body?.email?.trim().toLowerCase();

    // ❌ Validation
    if (!email || !validateEmail(email)) {
      return NextResponse.json(
        { success: false, message: "❌ Invalid email" },
        { status: 400 }
      );
    }

    // 🚫 Duplicate
    if (subscribers.has(email)) {
      return NextResponse.json({
        success: false,
        message: "Already subscribed 💚",
      });
    }

    // ✅ Save first (never lose data)
    subscribers.set(email, {
      email,
      createdAt: Date.now(),
      source: "website",
    });

    let emailStatus = "success";

    try {
      const transporter = createTransporter();
      const EMAIL_USER = process.env.EMAIL_USER!;

      // 🧪 Verify connection (debugging)
      await transporter.verify();

      const results = await Promise.allSettled([
        transporter.sendMail({
          from: `"Subscriber Alert" <${EMAIL_USER}>`,
          to: EMAIL_USER,
          subject: "🎉 New Subscriber",
          html: adminTemplate(email),
        }),
        transporter.sendMail({
          from: `"Welcome" <${EMAIL_USER}>`,
          to: email,
          subject: "Welcome 🎉",
          html: userTemplate(email),
        }),
      ]);

      // 🔥 Detailed error logging
      results.forEach((res, i) => {
        if (res.status === "rejected") {
          emailStatus = "failed";
          console.error(
            i === 0 ? "❌ Admin email failed:" : "❌ User email failed:",
            res.reason
          );
        } else {
          console.log(
            i === 0 ? "✅ Admin email sent" : "✅ User email sent"
          );
        }
      });

    } catch (mailError) {
      emailStatus = "failed";
      console.error("❌ Mail system error:", mailError);
    }

    // 🎯 Smart response
    if (emailStatus === "failed") {
      return NextResponse.json({
        success: true,
        warning: true,
        message: "Subscribed, but email failed ⚠️",
      });
    }

    return NextResponse.json({
      success: true,
      message: "🎉 Subscribed & email sent!",
    });

  } catch (error: any) {
    console.error("❌ API ERROR:", error);

    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}