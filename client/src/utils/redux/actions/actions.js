import { 
   FETCHUSERS,
   DELETEUSER,
   UPDATEUSER,
   CREATEUSER,
   ISLOGIN
} from "../types/types"

import * as api from "../../Api.js"


export const getUsers =()=>
async(dispatch)=>{
  try{
    const { data } = await api.fetchUsers()
    
    dispatch({
      type:FETCHUSERS,
      payload:data
    })
    
  } catch (e){
    console.log(e)
  }
}

export const createUser =(user)=>
async(dispatch)=>{
 

try{
 const { data } = await api.createUser(user);
 
 dispatch({
   type:CREATEUSER,
   payload:data
 })
}catch(e){
  console.log(e)
}
}


export const isAuth =()=>(
  
   {
    type:ISLOGIN
  }
  
  )

