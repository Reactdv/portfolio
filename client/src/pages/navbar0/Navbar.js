import React from "react"
import { useNavigate,Link } from "react-router-dom"


import "./navbar.css"

export const Navbar =()=>{
  return (
    
    <div className="navbar__container">
        <div className="left">
         <div className="search__container">
          <input type="search"/>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        </div>
        <div className="center">
        </div>
        <div className="right">
          <Link to="login">
            Login
          </Link>
          <Link to="signup">
            Signup
          </Link>
          <Link to="checkout"
          className="cart__container"
          >
            <i className="fa-solid fa-cart-shopping"></i>
             <div>
               5
             </div>
          </Link>
        </div>
    </div>
    
    )
}