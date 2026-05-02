import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // ✅ VALIDATION
    if (!name || !email || !message) {
      return NextResponse.json({
        success: false,
        error: "All fields are required",
      });
    }

    // ✅ TRANSPORTER (GMAIL)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ===============================
    // 📩 ADMIN EMAIL (YOU RECEIVE)
    // ===============================
    const adminTemplate = `
      <div style="font-family: 'Segoe UI', sans-serif; background:#f1f5f9; padding:30px;">
        <div style="max-width:650px; margin:auto; background:white; border-radius:16px; overflow:hidden; box-shadow:0 15px 40px rgba(0,0,0,0.08);">

          <!-- HEADER -->
          <div style="background:linear-gradient(90deg,#16a34a,#10b981); padding:25px; color:white; text-align:center;">
            <h2 style="margin:0;">📩 New Contact Message</h2>
            <p style="margin:5px 0 0; font-size:14px;">Your website received a new inquiry</p>
          </div>

          <!-- BODY -->
          <div style="padding:25px;">
            <div style="margin-bottom:15px;">
              <strong>Name:</strong><br/>
              <span style="color:#374151;">${name}</span>
            </div>

            <div style="margin-bottom:15px;">
              <strong>Email:</strong><br/>
              <span style="color:#374151;">${email}</span>
            </div>

            <div style="margin-top:20px;">
              <strong>Message:</strong>
              <div style="margin-top:10px; background:#f3f4f6; padding:15px; border-radius:10px; line-height:1.6;">
                ${message}
              </div>
            </div>
          </div>

          <!-- FOOTER -->
          <div style="background:#f9fafb; padding:15px; text-align:center; font-size:12px; color:#6b7280;">
            🚀 Sent from your contact form • ${new Date().toLocaleString()}
          </div>

        </div>
      </div>
    `;

    // ===============================
    // 📬 USER AUTO-REPLY EMAIL
    // ===============================
    const userTemplate = `
      <div style="font-family: 'Segoe UI', sans-serif; background:#f9fafb; padding:30px;">
        <div style="max-width:600px; margin:auto; background:white; border-radius:16px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.08);">

          <!-- HEADER -->
          <div style="background:linear-gradient(90deg,#16a34a,#10b981); padding:20px; text-align:center; color:white;">
            <h2 style="margin:0;">Thank You, ${name}! 🌿</h2>
          </div>

          <!-- BODY -->
          <div style="padding:25px; color:#374151;">
            <p>Hello ${name},</p>

            <p>
              Thank you for reaching out to us. We’ve received your message and truly appreciate you taking the time to connect.
            </p>

            <p>
              Our team will review your message and get back to you as soon as possible.
            </p>

            <div style="margin-top:20px; padding:15px; background:#ecfdf5; border-radius:10px;">
              <strong>Your Message:</strong>
              <p style="margin-top:10px;">${message}</p>
            </div>

            <p style="margin-top:20px;">
              Warm regards,<br/>
              <strong>Your Team</strong>
            </p>
          </div>

          <!-- FOOTER -->
          <div style="background:#f3f4f6; padding:15px; text-align:center; font-size:12px; color:#6b7280;">
            This is an automated response. Please do not reply directly.
          </div>

        </div>
      </div>
    `;

    // ===============================
    // 🚀 SEND EMAIL TO ADMIN
    // ===============================
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `📩 New Message from ${name}`,
      html: adminTemplate,
      text: message,
    });

    // ===============================
    // 📬 SEND AUTO REPLY TO USER
    // ===============================
    await transporter.sendMail({
      from: `"Support Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "✅ We received your message",
      html: userTemplate,
    });

    console.log("✅ Both emails sent successfully");

    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error("❌ EMAIL ERROR:", error);

    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}