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



   
  const RenderCarousel =(props)=>{

return (
    
     <div 
    id={props.id} 
     className="carousel auto__scroll">
      <div className="img__container">
           <img src={props.img}/>
      </div>
      <div className="info__container">
       <h1>{props.h1}</h1>
       <h3>
          {props.txt}
       </h3>
      </div>
     </div>
  
    
    )
}
  
  

export const Carousel =()=>{
  const [loopCarousel,setLoopCarousel] = React.useState(0)
  const [isLeft,setIsLeft] = React.useState(false)
  
 const chevronLeft =()=>{
  setIsLeft(true) 
  setTimeout(function() {
    setIsLeft(false)
  },0);
 setLoopCarousel(state=>state - 1)
 if(loopCarousel == 0)setLoopCarousel(2)
   
 }

 const chevronRight =()=>{
 setIsLeft(false) 
 setTimeout(function() {
   setIsLeft(true)
 },0);
 setLoopCarousel(state=>state +1)
 if(loopCarousel == 2) setLoopCarousel(0)
 }


const carousel =()=>{
  if(loopCarousel == 0){
    return (
    <RenderCarousel
    id={
      !isLeft?"mount__from__left":
      "mount__from__right"
    }
    img={fashionable}
    h1="SUMMER SALE"
    txt= "Don't compromise on styles ! GET 30% OFF on new arrivals"
    
    />
    )
  }if(loopCarousel == 1){
    return(
      <RenderCarousel
    id={
      !isLeft?"mount__from__left":
      "mount__from__right"
    }
    img={morelos}
    h1="AUTUMN SALE"
    txt= "Don't compromise on styles ! GET 30% OFF on new arrivals"
    isLeft={isLeft}
    />
    )
  }if(loopCarousel == 2){
    return  (
    <RenderCarousel
    id={
      !isLeft?"mount__from__left":
      "mount__from__right"
    }
    img={wearingSunglasses}
    h1="LOUNGEWARE SALE"
    txt= "Don't compromise on styles ! GET 30% OFF on new arrivals"
    
    />
    )
  }
}  



  return (
    
    <div className="carousel__container">
       <div
        onClick={chevronLeft}
       className="chevron__left">
           <i 
           className="fa-solid fa-circle-chevron-left"/>
       </div>
       <div 
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