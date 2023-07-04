import React from "react";
import { useSelector } from "react-redux";


const CartPage = ()=>{
    const {product} = useSelector((state) => state.productDetail);
    
  if(!product) return <h1>Loading...</h1>
  
  return (
    <div className='container'>
      <h2>Details Page For Post With ID {product.id}</h2>
      <img src={`https://picsum.photos/200?random=${product.id}`} alt={product.title} />
      <p>User ID: {product.userId}</p>
      <h3>Title: {product.title}</h3>
      <p>Body: {product.body}</p>
  </div>
  )
}

export default CartPage;


