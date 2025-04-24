import { NextResponse } from "next/server";
import bcrypt from "bcrypt"
import jwt from  "jsonwebtoken"
import { cookies } from "next/headers";
import User from "@/models/User";
import { connectDB } from "@/lib/connectDB";

await connectDB();

export async function POST(req) {
  const {name,username,password} =  await req.json();
  console.log("name is", name)

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  console.log("hash is :",hash)

  const user = await User.findOne({username})
  if (user) {
    return NextResponse.json({success:  true, message: `${user.username} already exist`})
  }
  const newUser =  await User({name, username,  password: hash})
  await newUser.save()

  const token = jwt.sign({username, password, name}, process.env.JWT_SECRET)
  console.log("token is", token)

  const cookie = await cookies()
  cookie.set("token", token, {
    httpOnly: true
  })

  return NextResponse.json({success: true, message: "user created"})
}