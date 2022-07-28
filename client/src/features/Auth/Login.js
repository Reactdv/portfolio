import React from "react"
import { useSelector,useDispatch } from "react-redux"
import { Link,useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { isAuth,Circular } from "../../utils"


const Login =()=>{
  const [isShowPass,setShowPass] = React.useState(false)
  const [userData,setUserData] = React.useState({
    email:"",
    password:""
  })
  
  const [pasteUser,setPasteUser] = React.useState({
    email:"",
    password:""
  })
 
 
const auth = useSelector(state=>state.auth)

  const users = useSelector(state=>state.userReducer)
  
  const checkUser = users.some((user)=>user.email === userData.email && user.password === userData.password || user.email === pasteUser.email && user.password === pasteUser.password)
  
  console.log(checkUser,users)
 const navigate = useNavigate() 
 const dispatch = useDispatch()
 
 
 
 
 
 
  const handleLogin =()=>{
  const stringifiedUser = JSON.stringify(users)  
    if(!checkUser){
      toast.error("invalid username or password",{position:"top-center"})
    }else{
      
      
      navigate("/")
     if(localStorage.getItem("isAuth")){
       console.log("user is already login")
     }else{
      dispatch(isAuth())
      localStorage.setItem("isAuth",JSON.stringify(auth))
     }
    }
 
  }
  

  
  return (
    
    <div className="login__container">
   {
     users.length <= 0?
     <Circular />
     :
   
      <div className="scale login__container-card">
         <div>
           <input 
           value={userData.email}
           onPaste={(e)=>setPasteUser({
             ...pasteUser,
             email:e.clipboardData.getData("text")
           })}
           onChange={(e)=>setUserData({
             ...userData,
             email:e.target.value
           })}
           type="email"
           placeholder="email"/>
            <i className="fa-solid fa-envelope"></i>
         </div>
         <div>
           <input 
           value={userData.password}
           onPaste={(e)=>setPasteUser({
             ...pasteUser,
             password:e.clipboardData.getData("text")
           })}
           onChange={(e)=>setUserData({
             ...userData,
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
         <div className="login__btn">
           <button onClick={handleLogin}>
              Login
           </button>
         </div>
         <div>
           <Link className="link2"to="/signup">
            Create an account 
           </Link>
        </div>
        <div>
          forgot password ?
        </div>
      </div>
   }  
      <ToastContainer />
    </div>
    
    )
}

export default Login