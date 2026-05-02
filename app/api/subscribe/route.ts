import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// 🔐 Create transporter (Gmail)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// 🎨 Beautiful Admin Email Template
const adminTemplate = (email: string) => `
  <div style="font-family: 'Segoe UI', Arial; background:#0f172a; padding:40px; color:#fff;">
    <div style="max-width:600px; margin:auto; background:#111827; border-radius:12px; padding:30px;">
      
      <h2 style="color:#22c55e; margin-bottom:20px;">📩 New Subscriber Alert</h2>
      
      <p style="color:#9ca3af;">A new user has subscribed to your platform.</p>

      <div style="margin-top:20px; padding:20px; background:#1f2937; border-radius:8px;">
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Source:</strong> Website</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      </div>

      <p style="margin-top:30px; font-size:12px; color:#6b7280;">
        Powered by Vihaan Writes System 🚀
      </p>
    </div>
  </div>
`;

// 🎨 Beautiful User Welcome Template
const userTemplate = (email: string) => `
  <div style="font-family: 'Segoe UI', Arial; background:#f9fafb; padding:40px;">
    <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:12px; padding:30px; text-align:center;">
      
      <h2 style="color:#16a34a;">Welcome 🎉</h2>

      <p style="color:#374151; margin-top:10px;">
        You're now part of something meaningful.
      </p>

      <p style="color:#6b7280; margin-top:20px;">
        Expect stories, insights, and updates that matter.
      </p>

      <div style="margin-top:30px;">
        <a href="#" style="
          background:#16a34a;
          color:white;
          padding:12px 24px;
          border-radius:8px;
          text-decoration:none;
          font-weight:bold;
        ">
          Explore Now
        </a>
      </div>

      <p style="margin-top:40px; font-size:12px; color:#9ca3af;">
        You subscribed using: ${email}
      </p>

      <p style="margin-top:10px; font-size:14px; color:#374151;">
        — Vihaan ✍️
      </p>
    </div>
  </div>
`;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = body.email?.trim();

    // ✅ Strong Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid email address",
        },
        { status: 400 }
      );
    }

    // ⚡ Send Admin Notification
    await transporter.sendMail({
      from: `"Subscriber Alert" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "🎉 New Subscriber",
      html: adminTemplate(email),
    });

    // ⚡ Send Welcome Email
    await transporter.sendMail({
      from: `"Vihaan Writes" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Welcome to Vihaan Writes 🎉",
      html: userTemplate(email),
    });

    return NextResponse.json({
      success: true,
      message: "Subscribed successfully 🎉",
    });

  } catch (error: any) {
    console.error("SUBSCRIBE ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to send email. Try again.",
      },
      { status: 500 }
    );
  }
}