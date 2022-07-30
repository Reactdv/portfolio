import React from "react"

import "./carousel.css"
import vicky from "../../../assets/vicky-cheng-removebg-preview.png"
import morelos from "../../../assets/alejandro-morelos-removebg-preview.png"
import campbell from "../../../assets/christopher-campbell-removebg-preview.png"
import wearingSunglasses from "../../../assets/wearing-sunglasses.png"
import fashionable from "../../../assets/fashionable.png"
import hill from "../../../assets/dom-hill.png"
import ebony from "../../../assets/ebony.png"
import brooke from "../../../assets/brooke-cagle.png"



  
  const RenderImgCarousel1 =()=>{
  return (
    
     <div 
     id="mount__from__left"
     className="carousel">
      <div className="img__container">
        <img src={fashionable}/>
      </div>
      <div className="info__container">
       <h1>AUTUMN SALE</h1>
       <h3>
          Don't compromise on styles ! GET 30% OFF on new arrivals
       </h3>
      </div>
     </div>
  
    
    )
}
  
  const RenderImgCarousel2 =()=>{
  return (
    
     <div 
     id="mount__from__left"
     className="carousel">
      <div className="img__container">
        <img src={brooke}/>
      </div>
      <div className="info__container">
       <h1>SUMMER SALE</h1>
       <h3>
          Don't compromise on styles ! GET 30% OFF on new arrivals
       </h3>
      </div>
     </div>
  
    
    )
}
  
  const RenderImgCarousel3 =()=>{
  return (
    
     <div 
     id="mount__from__left"
     className="carousel">
      <div className="img__container">
        <img src={ebony}/>
      </div>
      <div className="info__container">
       <h1>LOUNGEWARE SALE</h1>
       <h3>
          Don't compromise on styles ! GET 30% OFF on new arrivals
       </h3>
      </div>
     </div>
  
    
    )
}
  
  

export const Carousel =()=>{
  const [loopCarousel,setLoopCarousel] = React.useState(0)
  
 const chevronLeft =()=>{
   
 setLoopCarousel(state=>state - 1)
 
 }

 const chevronRight =()=>{
 setLoopCarousel(state=>state +1)
 if(loopCarousel == 2) setLoopCarousel(0)
 }


const carousel =()=>{
  if(loopCarousel == 0){
    return    <RenderImgCarousel1 />
  }if(loopCarousel == 1){
    return  <RenderImgCarousel2 />
  }if(loopCarousel == 2){
    return  <RenderImgCarousel3 />
  }
}  

const click =()=>console.log("click")
 
  return (
    
    <div className="carousel__container">
       <div
        onClick={chevronLeft}
       className="chevron__left">
           <i 
           className="fa-solid fa-circle-chevron-left"/>
       </div>
       <div 
        id="mount__from__right"
       className="content__wrapper">   
           {carousel()}
       </div>
       <div 
       onClick={chevronRight}
       className="chevron__right">
           <i className="fa-solid fa-circle-chevron-right"/>
       </div>
    </div>
    
    )


}