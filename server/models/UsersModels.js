import mongoose from "mongoose"


const UsersSChema = mongoose.Schema({
  username:String,
  email:String,
  password:String,
  confirmPassword:String
})

export const UsersModel = mongoose.model("users",UsersSChema)