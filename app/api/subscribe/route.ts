import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// 🧠 In-memory store (⚠️ replace with DB in production)
type Subscriber = {
  email: string;
  createdAt: number;
  source: string;
};

const subscribers = new Map<string, Subscriber>();

// 🔐 ENV VALIDATION (prevents silent crashes)
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  throw new Error("❌ EMAIL_USER / EMAIL_PASS missing in environment");
}

// 🚀 Transporter (secure Gmail config)
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Verify transporter once
transporter.verify((error) => {
  if (error) {
    console.error("❌ Email transporter error:", error);
  } else {
    console.log("✅ Email server ready");
  }
});

// 🎨 Reusable wrapper layout (DRY design)
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

// 🎨 Admin Template (Premium)
const adminTemplate = (email: string) =>
  emailWrapper(
    `
    <h2 style="color:#22c55e;">🚀 New Subscriber Joined</h2>

    <p style="color:#cbd5f5;margin-top:10px;">
      A new user has joined your mission-driven platform.
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

    <p style="margin-top:25px;font-size:12px;color:#64748b;">
      System Notification • One Meal One Hope ⚡
    </p>
  `,
    true
  );

// 🎨 User Template (Beautiful UX)
const userTemplate = (email: string) =>
  emailWrapper(
    `
    <h2 style="color:#16a34a;">Welcome 🎉</h2>

    <p style="color:#374151;margin-top:12px;">
      You're now part of something meaningful.
    </p>

    <p style="color:#6b7280;margin-top:16px;">
      Expect powerful stories, real impact updates, and meaningful change.
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

    <div style="margin-top:32px;padding-top:16px;border-top:1px solid #e5e7eb;">
      <p style="font-size:12px;color:#9ca3af;">
        Subscribed as: ${email}
      </p>

      <p style="margin-top:10px;color:#374151;">
        — Vihaan ✍️
      </p>
    </div>
  `);

// 🔍 Email validation
const validateEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// 🎯 API HANDLER
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const rawEmail = body.email;

    const email = rawEmail?.trim().toLowerCase();

    // ❌ Validation
    if (!email || !validateEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          status: "error",
          message: "❌ Please enter a valid email address",
        },
        { status: 400 }
      );
    }

    // 🚫 Duplicate Check
    if (subscribers.has(email)) {
      return NextResponse.json({
        success: false,
        status: "duplicate",
        message: "💚 You're already part of our mission!",
      });
    }

    // ✅ Save subscriber
    subscribers.set(email, {
      email,
      createdAt: Date.now(),
      source: "website",
    });

    // ⚡ Send emails in parallel
    const [adminRes, userRes] = await Promise.allSettled([
      transporter.sendMail({
        from: `"Subscriber Alert" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: "🎉 New Subscriber",
        html: adminTemplate(email),
      }),

      transporter.sendMail({
        from: `"One Meal One Hope" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Welcome 🎉",
        html: userTemplate(email),
      }),
    ]);

    // 🔎 Logging (non-blocking)
    if (adminRes.status === "rejected") {
      console.error("❌ Admin email failed:", adminRes.reason);
    }

    if (userRes.status === "rejected") {
      console.error("❌ User email failed:", userRes.reason);
    }

    // ✅ Success Response
    return NextResponse.json({
      success: true,
      status: "new",
      message: "🎉 Successfully subscribed!",
    });

  } catch (error: any) {
    console.error("❌ SUBSCRIBE ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        status: "error",
        message: "Server error. Please try again later.",
      },
      { status: 500 }
    );
  }
}