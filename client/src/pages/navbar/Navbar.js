import React from "react"
import { Link,useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

import "./navbar.css"


const navbarLinks = [
  
  {
     component:"Home",
     url:"/"
  },
  
  {
     component:"Blog",
     url:"blog"
  },
  
  {
     component:"Products",
     url:"products"
  },
  
  {
     component:"About",
     url:"about"
  },
  
  {
     component:"Promotion",
     url:"promotion"
  },
  
  {
     component:"Store",
     url:"store"
  },
  
  {
     component:"Contact",
     url:"contact"
  },
  
  ]

export const Navbar =()=>{
  const [isAnimate,setIsAnimate] = React.useState(false)
  const [isOpenDrawer,setIsOpenDrawer] = React.useState(false)
 let w = window.screen.width;
 let h = window.screen.height;
 console.log(w,h)
 const isAuth = useSelector(state=>state.auth)
 
  let navigate = useNavigate()
  return (
  <div>  
    <div className="app__navbar">
     {navbarLinks.map((nav,index)=>{
       return (
         <Link
          className="link"
          key={index}
          to={nav.url}
           >{nav.component}
         </Link>
         )
     })}
 {
   localStorage.getItem("isAuth")?
   <div 
   id={isOpenDrawer && "app__navbar-avatar__drawer"}
   className="app__navbar-avatar-container"
   
   >
     
     
      <img 
      className="app__navbar-avatar"
      src={require("../../assets/michelle.jpg")}
      />
    
    <div 
    onClick={()=>setIsOpenDrawer(t=>!t)}
    className="app__navbar-avatar-icon-container">
       <div>
       </div>
       <div>
       </div>
       <div>
       </div>
    </div>
 
   </div>
   :
    <div className="app__navbar-login_signup0">
       <Link 
       style={{
         color:"white",
     
         fontWeight:"bold"
       }}
       to="login">Login
       </Link>
       <Link 
       style={{
         color:"white",
      
         fontWeight:"bold"
       }}
       to="signup">Signup
       </Link>
     </div>
 } 
 

     <div 
    
     className={isAnimate? "app__burger animate": "app__burger"}
      onClick={()=>setIsAnimate(t=>!t)}>
     </div>
    </div>
      {
        isAnimate &&
        <div 
     
        className="app__navbar-drawer">
          {
            navbarLinks.map((nav,index)=>{
              return (
                
                <Link 
                key={index}
                className="link1"
                to={nav.url}>
                 {nav.component}
                </Link>
                
                )
            })
          }
  {
    localStorage.getItem("isAuth")?
     <h1>avatar</h1>
    :
    
  <div className="app__navbar-login_signup">
          <div 
          onClick={()=>{
            navigate("login")
            setIsAnimate(t=>!t)
          }}
          className="link2"
         >Login
          </div>
          <div 
          onClick={()=>{
            navigate("signup")
            setIsAnimate(t=>!t)
          }}
          className="link2"
          >Signup
          </div>
        </div> 
        
  }    
        </div>
        
      }
  </div>   
    )
}