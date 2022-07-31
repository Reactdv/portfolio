import React from "react"
import { Carousel, Categories } from "../../components"
import "./home.css"


const Home =()=>{
  return (
    
    <div className="home__container">
      <Carousel />
      <Categories />
    </div>
    
    )
}

export default Home;