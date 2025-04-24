import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import User from "@/models/User";
import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";

await connectDB();


export async function POST(req) {
  const {username, password} = await req.json();
  console.log("username is ", username)

  const cookie = await cookies()

  const  user = await User.findOne({username})
  if (!user) {
    console.log("username didnot exist")
    return NextResponse.json({success: false, message: `${username} didn't exist`});
  }

  const result =  bcrypt.compare(password, user.password)

  if (!result) {
    console.log("incoreect  password")
    return NextResponse.json({success: false, message: "incorrect password"});
  }
  const  token = jwt.sign({name: user.name, username: user.username, password: user.password}, process.env.JWT_SECRET)

  cookie.set("token", token, {
    httpOnly: true
  })

  console.log("logged in successfully")

  return NextResponse.json({success: true, message: "logged in successfully"})
}