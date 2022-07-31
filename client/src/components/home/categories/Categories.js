import React from "react"

import "./categories.css"
import summer from "../../../assets/summer.jpg"
import summer2 from "../../../assets/summer2.jpg"
import loungeware from "../../../assets/loungeware.jpg"
import loungeware4 from "../../../assets/loungeware 4.jpg"
import loungeware5 from "../../../assets/loungeware 5.jpg"

export const Categories =()=>{
  return (
 
 <div className="categories__container">
  <div className="categories__wrapper">
    <div className="summer">
      <img src={summer2}/>
    </div>
    <div className="autumn">
      <img src={loungeware4}/>
    </div>
    <div className="loungeware">
      <img src={loungeware5}/>  
    </div> 
  </div>
 </div>
 
 )
}