import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { Circular } from "../../utils"


import "./navbar.css"

const navLinks = [
  
  {
    link:"/",
    component:"Home"
  },
  
  {
    link:"about",
    component:"About"
  },
  
  {
    link:"products",
    component:"Products"
  },
  
  {
    link:"store",
    component:"Store"
  },
  
  {
    link:"cntact",
    component:"Contact"
  }
  
  ]


export const Navbar =()=>{
  
  const [isOpen,setIsOpen] = React.useState(false)
  const isAuth = useSelector(state=>state.auth)


const renderAuthPage0 =()=>{
  if(localStorage.getItem("isAuth")){
    return (
      
      <div className="auth__page-container">
        <img 
        
        src="../../assets/michelle.jpg"/>
      </div>
      )
  }else{
    <>
         <Link 
        className="links"
        to="login">
          Login
        </Link>
        <Link 
          className="links"
          to="signup">
          Signup
        </Link>
    </>    
  }
}
 
 
const renderAuthPage =()=>{
  if(localStorage.getItem("isAuth")){
    return (
    <>  
      <Link 
      onClick={()=>setIsOpen(t=>!t)}
      style={{color:"white"}}
      to="/profile">
        Profile 
      </Link>
      <Link 
      onClick={()=>{
        localStorage.removeItem("isAuth")
        setIsOpen(t=>!t)
      }}
      style={{color:"white"}}
      to="/login">
        Logout
      </Link>
    </>  
      )
  }else{
    return (
      <div style={{display:"flex",gap:"10px",flexDirection:"column", alignItems:"center",justifyContent:"center"}}>
         <Link 
          onClick={()=>setIsOpen(t=>!t)}
          style={{color:"white"}}
          to="login">Login
          </Link>
          <Link 
          onClick={()=>setIsOpen(t=>!t)}
          style={{color:"white"}}
          to="signup">Signup
         </Link> 
      </div>   
    )     
  }
}
 console.log(renderAuthPage)
  const renderNavs =
    navLinks.map((nav,index)=>{
      return (
        
        <li key={index}>
           <Link 
           className="nav__links"
           to={nav.link}>
             {nav.component}
           </Link>
        </li>
        
        )
    })
 
 
  const renderNavs2 =
    navLinks.map((nav,index)=>{
      return (
        
        <div key={index}>
           <Link 
           onClick={()=>setIsOpen(t=>!t)}
           style={{color:"white"}}
           className="nav__links"
           to={nav.link}>
             {nav.component}
           </Link>
        </div>
        
        )
    })
 

  
  const handleAnimate =()=> setIsOpen(t=>!t)
  
  return (
    
    <nav className="app__navbar">
      <ul>
     
        {renderNavs}
      </ul>
      <div 
        className="login__signup-container">
      
         {renderAuthPage0()}
      </div>
      <div 
       onClick={handleAnimate}
       id={isOpen?"open":null}
      className="burger__container">
        <div />
        <div />
        <div />
      </div>
      {
        isOpen &&
      <div 
        className="drawer__top">
          {renderNavs2}
          {renderAuthPage()}
      </div>
      }
    
    </nav>
    
    )
}
