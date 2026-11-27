import React from 'react'
import { data, useNavigate, useParams } from 'react-router-dom'
import productdata from './data/products.js'

const Productdetails = () => {
  const navigate = useNavigate()
  console.log(productdata)
  const  {id} = useParams()
  console.log(id)

  const product = productdata.find((prod)=>prod.id===Number(id))  
  if(!product){
    return (
      <div>
        <h1>product not found</h1>
        <button onClick={()=>navigate("/")}>back to home</button> 
      </div>
    )
  }
  return (
    <div>
     <h1>product details</h1>
     <h2>{product.id}</h2>
     <h3>{product.name}</h3>
     <h3>{product.description}</h3>
     <h3>{product.category}</h3>
    </div>
  )
}
export default Productdetails;
