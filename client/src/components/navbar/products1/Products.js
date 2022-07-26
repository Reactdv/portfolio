import React from "react"

import "./products.css"

const Products =()=>{
  const [isClick,setIsClick] = React.useState(false)
 
  return (
    
    <div className="app__products">
     <div className="app__products-card">
     <div
     
      onClick={()=>setIsClick(t=>!t)}
     className="app__products-card-img">dkdkkd
         
       </div>
      <div 
      onClick={()=>setIsClick(t=>!t)}
       
      className="app__products-card-details">ffmdmd
      </div> 
     </div>
   
    </div>  
    
    )
}

export default Products