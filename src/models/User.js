import mongoose from  "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,

  },
  username: {
    type: String,
  },
  password: {
    type: String,
    min: [6, "password must be atleast 6 character"]
  },
})

const User = mongoose.models.user || mongoose.model("user", userSchema)

export default User