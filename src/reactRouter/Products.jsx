import React from 'react'
import products from './data/products.js'
import { useNavigate } from 'react-router-dom'


//useNavigate hook -new one
const Products = () => 
{
    const navigate = useNavigate()
    const viewDetails = (id)=>{
        navigate(`/products/${id}`)

    }

  return (
    <div>
      <h1>products</h1>
      <div className = 'productsdetails'>
      {
        products.map((productnames)=>(
           <div className='product-container' key={productnames.id}>
            <h3>productName : {productnames.name}</h3>
            <button onClick={(()=>viewDetails(productnames.id)  
            )}>view details</button>
          </div>
        )

        )
      }

      </div>
    </div>
  )
}

export default Products
