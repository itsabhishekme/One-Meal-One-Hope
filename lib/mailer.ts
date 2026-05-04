import nodemailer from "nodemailer";

// 🔐 ENV VALIDATION (fail fast)
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  throw new Error("❌ EMAIL_USER / EMAIL_PASS missing in environment variables");
}

/* -------------------------------------------------------------------------- */
/*                                CONFIGURATION                               */
/* -------------------------------------------------------------------------- */

const APP_NAME = "One Meal One Hope";
const FROM_EMAIL = `"${APP_NAME}" <${process.env.EMAIL_USER}>`;

/* -------------------------------------------------------------------------- */
/*                                TRANSPORTER                                 */
/* -------------------------------------------------------------------------- */

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Gmail App Password
  },
  tls: {
    rejectUnauthorized: false,
  },
  connectionTimeout: 10000,
  greetingTimeout: 10000,
});

// ✅ Verify connection
export const verifyTransporter = async () => {
  try {
    await transporter.verify();
    console.log("✅ Mail server is ready");
  } catch (error) {
    console.error("❌ Mail server connection failed:", error);
  }
};

/* -------------------------------------------------------------------------- */
/*                             EMAIL UI DESIGN LAYER                          */
/* -------------------------------------------------------------------------- */

// 🎨 Beautiful email wrapper (reusable layout system)
const emailLayout = ({
  title,
  content,
  footer,
  dark = false,
}: {
  title: string;
  content: string;
  footer?: string;
  dark?: boolean;
}) => {
  return `
    <div style="
      font-family:Segoe UI,Arial;
      padding:40px;
      background:${dark ? "#020617" : "#f8fafc"};
    ">
      <div style="
        max-width:620px;
        margin:auto;
        background:${dark ? "#0f172a" : "#ffffff"};
        border-radius:18px;
        padding:32px;
        box-shadow:${dark
          ? "0 0 50px rgba(34,197,94,0.15)"
          : "0 10px 40px rgba(0,0,0,0.08)"};
      ">
        <h2 style="color:${dark ? "#22c55e" : "#16a34a"};">
          ${title}
        </h2>

        <div style="margin-top:16px;">
          ${content}
        </div>

        ${
          footer
            ? `<div style="margin-top:28px;font-size:12px;color:#64748b;">
                ${footer}
              </div>`
            : ""
        }
      </div>
    </div>
  `;
};

/* -------------------------------------------------------------------------- */
/*                              EMAIL TEMPLATES                               */
/* -------------------------------------------------------------------------- */

// 🎉 Welcome Email
export const buildWelcomeEmail = (email: string) =>
  emailLayout({
    title: "Welcome 🎉",
    content: `
      <p style="color:#374151;">
        You're now part of something meaningful.
      </p>

      <p style="color:#6b7280;margin-top:12px;">
        Expect impactful stories, updates, and real change.
      </p>

      <div style="margin-top:24px;">
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

      <p style="margin-top:28px;font-size:12px;color:#9ca3af;">
        Subscribed as: ${email}
      </p>
    `,
    footer: "— Vihaan ✍️",
  });

// 📩 Admin Notification
export const buildAdminEmail = (email: string) =>
  emailLayout({
    title: "🚀 New Subscriber",
    dark: true,
    content: `
      <p style="color:#cbd5f5;">
        A new user has joined your platform.
      </p>

      <div style="
        margin-top:16px;
        padding:16px;
        background:#020617;
        border-radius:10px;
        border:1px solid rgba(34,197,94,0.2);
      ">
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      </div>
    `,
    footer: "System Notification • One Meal One Hope ⚡",
  });

/* -------------------------------------------------------------------------- */
/*                              CORE SEND FUNCTION                            */
/* -------------------------------------------------------------------------- */

export const sendEmail = async ({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) => {
  try {
    const info = await transporter.sendMail({
      from: FROM_EMAIL,
      to,
      subject,
      html,
    });

    return {
      success: true,
      id: info.messageId,
    };
  } catch (error: any) {
    console.error("❌ Email sending failed:", error);

    return {
      success: false,
      error: error.message,
    };
  }
};

/* -------------------------------------------------------------------------- */
/*                           ADVANCED SEND (MULTI)                            */
/* -------------------------------------------------------------------------- */

// ⚡ Send multiple emails safely
export const sendBulkEmails = async (
  emails: {
    to: string;
    subject: string;
    html: string;
    label?: string;
  }[]
) => {
  const results = await Promise.allSettled(
    emails.map((email) =>
      transporter.sendMail({
        from: FROM_EMAIL,
        to: email.to,
        subject: email.subject,
        html: email.html,
      })
    )
  );

  results.forEach((res, i) => {
    const label = emails[i].label || `Email ${i + 1}`;

    if (res.status === "fulfilled") {
      console.log(`✅ ${label} sent`);
    } else {
      console.error(`❌ ${label} failed:`, res.reason);
    }
  });

  return results;
};

/* -------------------------------------------------------------------------- */
/*                                 UTILITIES                                  */
/* -------------------------------------------------------------------------- */

// 🧠 Email validation helper
export const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// 🎨 Logging helper
export const logEmailStatus = (label: string, result: any) => {
  if (result.success) {
    console.log(`✅ ${label} email sent`);
  } else {
    console.error(`❌ ${label} failed:`, result.error);
  }
};