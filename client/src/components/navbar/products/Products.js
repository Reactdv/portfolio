import React from "react"
import { useSelector,useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import "./products.css"
import tsRedBlack from "../../../assets/ts-io-red-black.jpg"
import tsDark from "../../../assets/ts-io-dark.jpg"
import tsBlack from "../../../assets/ts-io-black.jpg"
import tsPurle from "../../../assets/ts-io-purple.jpg"
import tsGreen from "../../../assets/ts-io-green.jpg"
import tsRoyalAqua from "../../../assets/ts-io-royal-aqua.jpg"

const products = [
  {
    imgProduct:tsRedBlack,
    price:"115.",
    decimal:"27"
  },
  {
    imgProduct:tsRoyalAqua,
    price:"215.",
    decimal:"35"
  },
  {
    imgProduct:tsGreen,
    price:"139.",
    decimal:"17"
  },
  {
    imgProduct:tsPurle,
    price:"100.",
    decimal:"95"
  },
  {
    imgProduct:tsDark,
    price:"110.",
    decimal:"11"
  }
  
  ]


const Products =()=>{
  const [isClick,setIsClick] = React.useState(false)
 
 


 const navigate = useNavigate()
 
 
 
  return (
    
    <div className="app__products">
 
      {products.map((product,index)=>{
        return (

     <div 
     key={index}
     className="app__products_container">
      <div 
      
      onClick={()=>setIsClick(t=>!t)}
      className={isClick?"app__products-shoes slide__shoes":"app__products-shoes"}>
        <img
        className={isClick? "rotate__shoes":null}
        src={product.imgProduct}
        alt="shoes"/>
      </div>
      <div 
      onClick={()=>setIsClick(t=>!t)}
      className={isClick?"app__products-details slide__details":"app__products-details"}>
       <h1 
       className="title">TSIODFO Sneakers</h1>
       <h4 
       className="subtitle">Men's shoe</h4>
       <h4>Products details</h4>
        <ul>
         <li>
            Comfortable and breathable fabric
         </li>
         <li>
           Non-slip and wear-resistant outsole
         </li>
         <li>
           Slip on design, easy to wear, and fashion colour with everything
         </li>
         <li>
           Multi-color choice: black, green, grey, red, navy blue
         </li>
         
        </ul>
        <div className="sizes">
         <h4>size</h4>
         <ul>
           <li>39</li>
           <li>39.5</li>
           <li>40</li>
           <li>41.5</li>
           <li>42</li>
           <li>42.5</li>
         </ul>
        </div>
        <div className="price__container">
          <div>
             <sup>$</sup>
             <div>{product.price}</div>
             <small>{product.decimal}</small>
          </div>
          <div> 
            <button
            onClick={()=>{
             if(localStorage.getItem("isAuth")){
              navigate("/products/checkout")
             }else{
               navigate("/login")
             }
            }}
            >Buy now!
            </button>
          </div>
        </div>
     </div> 
     </div>
          )
      })}
    </div>
    
    )
}

export default Products