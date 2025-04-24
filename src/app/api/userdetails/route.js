import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export async function GET() {
  const cookie =  await cookies()
  const token = cookie.get("token").value // always use .value when getting cookie bcz you will getting and you will never know what th is going on. untill console log

  const user = jwt.verify(token, process.env.JWT_SECRET)
  const {name, username} = user

  console.log(user)

  return NextResponse.json({success: true, name, username})
}