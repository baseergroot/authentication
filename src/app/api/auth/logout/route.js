import { NextResponse } from "next/server";

const { cookies } = require("next/headers");

export async function GET() {
  const cookie = await cookies()
  cookie.delete("token")
  // cookie.set("token", "")
  console.log(cookie.get("token"))
  return NextResponse.json({success: true, message: "logged out"})
}