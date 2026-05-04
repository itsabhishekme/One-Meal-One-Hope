import nodemailer from "nodemailer";

/* -------------------------------------------------------------------------- */
/*                         SAFE ENV VALIDATION (IMPROVED)                     */
/* -------------------------------------------------------------------------- */

const getEnv = () => {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass) {
    console.warn("⚠️ EMAIL env variables missing (email sending disabled)");
    return null;
  }

  return { user, pass };
};

/* -------------------------------------------------------------------------- */
/*                                TRANSPORTER                                 */
/* -------------------------------------------------------------------------- */

let transporter: nodemailer.Transporter | null = null;

const getTransporter = () => {
  if (transporter) return transporter;

  const env = getEnv();
  if (!env) return null;

  transporter = nodemailer.createTransport({
    service: "gmail", // ✅ FIX: more reliable than manual SMTP
    auth: {
      user: env.user,
      pass: env.pass,
    },
    // ❌ removed bad TLS config (can break Gmail auth)
  });

  return transporter;
};

/* -------------------------------------------------------------------------- */
/*                             VERIFY (SAFE VERSION)                          */
/* -------------------------------------------------------------------------- */

export const verifyTransporter = async () => {
  const t = getTransporter();
  if (!t) return;

  try {
    await t.verify();
    console.log("✅ Mail server ready");
  } catch (error) {
    console.error("❌ Mail verification failed:", error);
  }
};

/* -------------------------------------------------------------------------- */
/*                              EMAIL DESIGN                                  */
/* -------------------------------------------------------------------------- */

const emailLayout = (title: string, content: string) => `
  <div style="font-family:Segoe UI,Arial;padding:40px;background:#f8fafc;">
    <div style="
      max-width:600px;
      margin:auto;
      background:#ffffff;
      border-radius:16px;
      padding:32px;
      box-shadow:0 10px 30px rgba(0,0,0,0.05);
    ">
      <h2 style="color:#16a34a;">${title}</h2>
      <div style="margin-top:16px;">
        ${content}
      </div>
    </div>
  </div>
`;

export const buildWelcomeEmail = (email: string) =>
  emailLayout(
    "Welcome 🎉",
    `
      <p>You're now part of something meaningful.</p>
      <p style="margin-top:12px;">Subscribed as: ${email}</p>
      <p style="margin-top:20px;">— Vihaan ✍️</p>
    `
  );

/* -------------------------------------------------------------------------- */
/*                              SEND FUNCTION                                 */
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
  const t = getTransporter();

  // ❌ If no env → skip safely
  if (!t) {
    console.warn("⚠️ Email skipped (missing env)");
    return { success: false, skipped: true };
  }

  try {
    // 🧪 VERIFY BEFORE SENDING (important debug step)
    await t.verify();

    const info = await t.sendMail({
      from: `"One Meal One Hope" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    });

    console.log("✅ Email sent:", info.messageId);

    return {
      success: true,
      id: info.messageId,
    };
  } catch (error: any) {
    console.error("❌ Email failed FULL ERROR:", error);

    return {
      success: false,
      error: error?.message || "Unknown email error",
    };
  }
};