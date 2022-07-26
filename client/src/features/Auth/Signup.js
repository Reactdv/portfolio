import React from "react"
import { Link,useNavigate } from "react-router-dom"
import "./styles.css"
import { createUser } from "../../utils"
import { useDispatch,useSelector } from "react-redux"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  



const Signup =()=>{
  const [isNavigate,setIsNavigate] = 
  React.useState(false)
  
  const [user,setUser] = React.useState({
    email:"",
    password:"",
    confirmPassword:""
  })
  const dispatch = useDispatch()
  let navigate = useNavigate()
  
  const users = useSelector(state=>state.userReducer)
  const emailCheck = users.some((User)=>
  User.email == user.email)
  const [isShowPass,setShowPass] = React.useState(false)
  
  
  
 const handleSubmit =(e)=>{
   e.preventDefault();
   
   if( emailCheck){
   toast.error("email already exist",{
     position:"top-center"
   })
   }else if(user.email == ""){
     toast.error("email cant be empty",{position:"top-center"})
   }
   
   else if(user.password !== user.confirmPassword){
   
   toast.error("password does not match",{
     position:"top-center"
   })
   }else if(user.password.length < 8){
     toast.error("password must be 8 characters or more")
   }else if(user.password.length > 40){
     toast.error("password too long")
   }
   
   
   
   else{
     dispatch(createUser(user))
     toast.success("register successful",{
       position:"top-center"
     })
     navigate("/login")
   }
 }
  
 console.log(user) 
  return (
    
       <div 
   
       className=" scale login__container">
      <form onSubmit={handleSubmit}>
      <div className="login__container-card">
         <div>
           <input 
           value={user.email}
           onChange={(e)=>setUser({
             ...user,
             email:e.target.value
           })}
           type="email"
           placeholder="email"/>
            <i className="fa-solid fa-envelope"></i>
         </div>
         <div>
           <input 
           value={user.password}
           onChange={(e)=>setUser({
             ...user,
             password:e.target.value
             })}
           type={isShowPass?"text":"password"}
           placeholder="password"/>
           <i className="fa-solid fa-key"></i>
            <i 
            onClick={()=>setShowPass(t=>!t)}
            className={isShowPass?"fa-solid fa-eye-slash":"fa-solid fa-eye"}>
            </i>
   
         </div>
         <div>
           <input 
            value={user.confirmPassword}
           onChange={(e)=>setUser({
             ...user,
             confirmPassword:e.target.value
              })}
           type={isShowPass?"text":"password"}
           placeholder="confirm password"/>
           <i className="fa-solid fa-key"></i>
            <i 
            onClick={()=>setShowPass(t=>!t)}
            className={isShowPass?"fa-solid fa-eye-slash":"fa-solid fa-eye"}>
            </i>
   
         </div>
         <div className="signup__button">
           <button type="submit">
              Create an account
           </button>
         </div>
         <div>
           <Link className="link2"to="/login">
            already have account
           </Link>
        </div>
    
      </div>
      </form> 
        <ToastContainer /> 
    </div>
  
    
    )
}

export default Signup


