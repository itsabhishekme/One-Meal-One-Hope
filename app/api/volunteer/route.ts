import { NextResponse } from "next/server";

import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    // PARSE BODY
    const body = await req.json();

    const {
      fullName,
      email,
      phone,
      city,
      occupation,
      experience,
      availability,
      motivation,
    } = body;

    // VALIDATION
    if (
      !fullName ||
      !email ||
      !phone ||
      !city ||
      !occupation ||
      !motivation
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields",
        },
        {
          status: 400,
        }
      );
    }

    // CREATE TRANSPORTER
    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // VERIFY CONNECTION
    await transporter.verify();

    // SEND MAIL
    await transporter.sendMail({
      from: `"One Meal One Hope NGO" <${process.env.EMAIL_USER}>`,

      to: process.env.RECEIVER_EMAIL,

      subject: `New Volunteer Application - ${fullName}`,

      html: `
      <div style="
        background:#0b0b0b;
        padding:40px;
        color:white;
        font-family:Arial,sans-serif;
        border-radius:20px;
      ">

        <h1 style="
          color:#22c55e;
          margin-bottom:30px;
          font-size:32px;
        ">
          New Volunteer Application
        </h1>

        <table style="
          width:100%;
          border-collapse:collapse;
        ">

          <tr>
            <td style="padding:14px;border:1px solid #222;font-weight:bold;">
              Full Name
            </td>

            <td style="padding:14px;border:1px solid #222;">
              ${fullName}
            </td>
          </tr>

          <tr>
            <td style="padding:14px;border:1px solid #222;font-weight:bold;">
              Email
            </td>

            <td style="padding:14px;border:1px solid #222;">
              ${email}
            </td>
          </tr>

          <tr>
            <td style="padding:14px;border:1px solid #222;font-weight:bold;">
              Phone
            </td>

            <td style="padding:14px;border:1px solid #222;">
              ${phone}
            </td>
          </tr>

          <tr>
            <td style="padding:14px;border:1px solid #222;font-weight:bold;">
              City
            </td>

            <td style="padding:14px;border:1px solid #222;">
              ${city}
            </td>
          </tr>

          <tr>
            <td style="padding:14px;border:1px solid #222;font-weight:bold;">
              Occupation
            </td>

            <td style="padding:14px;border:1px solid #222;">
              ${occupation}
            </td>
          </tr>

          <tr>
            <td style="padding:14px;border:1px solid #222;font-weight:bold;">
              Experience
            </td>

            <td style="padding:14px;border:1px solid #222;">
              ${experience || "Not provided"}
            </td>
          </tr>

          <tr>
            <td style="padding:14px;border:1px solid #222;font-weight:bold;">
              Availability
            </td>

            <td style="padding:14px;border:1px solid #222;">
              ${availability || "Not provided"}
            </td>
          </tr>

          <tr>
            <td style="padding:14px;border:1px solid #222;font-weight:bold;">
              Motivation
            </td>

            <td style="padding:14px;border:1px solid #222;">
              ${motivation}
            </td>
          </tr>

        </table>

        <p style="
          margin-top:40px;
          color:#9ca3af;
        ">
          One Meal One Hope NGO Volunteer System
        </p>

      </div>
      `,
    });

    // SUCCESS
    return NextResponse.json({
      success: true,
      message: "Volunteer application submitted successfully",
    });
  } catch (error: any) {
    console.log("VOLUNTEER API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error?.message ||
          "Failed to send volunteer application",
      },
      {
        status: 500,
      }
    );
  }
}