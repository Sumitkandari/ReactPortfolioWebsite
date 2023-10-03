import React from 'react'
import "./product.css";
import Me from "../../img/address.png"
function Product({img,link}) {

  return (
    <div className="p">
        <img src={img} alt=""  className="p-img" />
        
      
    </div>
  )
}

export default Product