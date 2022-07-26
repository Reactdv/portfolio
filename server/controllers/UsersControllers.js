import { UsersModel } from "../models/UsersModels.js"


export const getUsers = async(req,res)=>{
  try  {
    
    const Users = await UsersModel.find()
    res.status(200).json(Users)
  
  }
  catch(e){
    console.log(e)
  }
}

export const createUser = async(req,res)=>{
  const { email,password, confirmPassword} = req.body
  
  const newUser = new UsersModel({
 
    email,
    password,
    confirmPassword
  })
  
  try{
    await newUser.save()
    res.status(201).json(newUser)
    console.log(newUser)
  }catch(e){
    console.log(e)
  }
}