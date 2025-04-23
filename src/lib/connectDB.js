import mongoose from "mongoose";



export async function connectDB() {
  if (mongoose.connections[0].readyState) {
    console.log("db, already connected")
    return
  };

  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("db connected successfully")
  } catch (error) {
    console.log("db error: ",error)
  }
}