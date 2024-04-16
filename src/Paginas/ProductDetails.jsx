import React from 'react'
import { useParams } from "react-router-dom";

const ProductDetails = () => {
   
    const params= useParams();
  
    return (
    <div>Detalles del chamaco: {params.ProductID} gei </div>
  )
}

export default ProductDetails