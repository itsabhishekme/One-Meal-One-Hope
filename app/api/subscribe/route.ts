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

// 🎨 Admin Template
const adminTemplate = (email: string) =>
  emailWrapper(
    `
    <h2 style="color:#22c55e;">🚀 New Subscriber Joined</h2>
    <p style="color:#cbd5f5;margin-top:10px;">
      A new user has joined your platform.
    </p>

    <div style="
      margin-top:20px;
      padding:20px;
      background:#020617;
      border-radius:10px;
      border:1px solid rgba(34,197,94,0.2);
    ">
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      <p><strong>Source:</strong> Website</p>
    </div>
  `,
    true
  );

// 🎨 User Template
const userTemplate = (email: string) =>
  emailWrapper(`
    <h2 style="color:#16a34a;">Welcome 🎉</h2>

    <p style="color:#374151;margin-top:12px;">
      You're now part of something meaningful.
    </p>

    <p style="color:#6b7280;margin-top:16px;">
      Expect powerful stories and impact updates.
    </p>

    <div style="margin-top:28px;">
      <a href="#" style="
        background:linear-gradient(90deg,#16a34a,#22c55e);
        color:white;
        padding:12px 26px;
        border-radius:10px;
        text-decoration:none;
        font-weight:600;
        display:inline-block;
      ">
        Explore Now →
      </a>
    </div>

    <p style="margin-top:20px;font-size:12px;">
      Subscribed as: ${email}
    </p>
  `);

// 🔍 Email validation
const validateEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// 🚀 Create transporter ONLY when needed (fixes build issue)
const createTransporter = () => {
  const EMAIL_USER = process.env.EMAIL_USER;
  const EMAIL_PASS = process.env.EMAIL_PASS;

  if (!EMAIL_USER || !EMAIL_PASS) {
    throw new Error("EMAIL ENV missing");
  }

  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
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
        {
          success: false,
          message: "❌ Invalid email",
        },
        { status: 400 }
      );
    }

    // 🚫 Duplicate check
    if (subscribers.has(email)) {
      return NextResponse.json({
        success: false,
        message: "Already subscribed 💚",
      });
    }

    // ✅ Save subscriber
    subscribers.set(email, {
      email,
      createdAt: Date.now(),
      source: "website",
    });

    // ⚡ Create transporter at runtime (SAFE)
    const transporter = createTransporter();
    const EMAIL_USER = process.env.EMAIL_USER!;

    // 📩 Send emails
    await Promise.allSettled([
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

    return NextResponse.json({
      success: true,
      message: "🎉 Subscribed successfully!",
    });

  } catch (error: any) {
    console.error("❌ ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Server error",
      },
      { status: 500 }
    );
  }
}