import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("Volunteer Form:", body);

    return NextResponse.json({
      success: true,
      message: "Volunteer form submitted successfully",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
}