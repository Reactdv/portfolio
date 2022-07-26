import {
  FETCHUSERS,
  CREATEUSER,
  DELETEUSER,
  UPDATEUSER,
  ISLOGIN
} from "../types/types"



const reducer = (users=[],action)=>{
  switch(action.type){
    case FETCHUSERS :
      return action.payload
    case CREATEUSER:
      return [...users,action.payload]
    default :
    return users
  }
}

export default reducer

export const auth =(state = false,action)=>{
 
  switch(action.type){
    case ISLOGIN:
      return state = true
     break;
    default :
    return state
  }
}