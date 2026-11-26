import React, { use, useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Loading from './loading';
import './Loading.css'

const App = () => {
    const [products,setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState("");
    const [search, setSearch] = useState("");
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)
    useEffect(()=>{
          fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      setProducts(data)
      setLoading(false) 
        })
    },
    [])

  //   useEffect(() => {
  //   axios
  //     .get("https://fakestoreapi.com/products")
  //     .then((res) => {
  //       setProducts(res.data);
  //       setLoading(false)
  //     })
  //     .catch((error) => {
  //       console.log("Error fetching data:", error);
  //       setLoading(false)
  //       setError(true)
  //     });
  // }, []);




    useEffect(() => {
  fetch('https://fakestoreapi.com/products/1')
    .then(response => response.json())
    .then(data => setSelectedProduct(data))
    .catch(error => console.log(error));
  }, []); 


    console.log("products:",products)
  return (
    <div className='products-container'>
          <h2 className='title'>product details</h2>
          <input
             type="text"
             placeholder="Search product name..."
             value={search}
             onChange={(e) => setSearch(e.target.value)}
    />
      <div className='products-grid'>
           {products
                 .filter((product) =>
                   product.title.toLowerCase().includes(search.toLowerCase())
                 )
                 .map((product) => (
          <div key={product.id} className='product-card'>
            <img src={product.image} className='product-img'></img>
            <h3 className='product-title'>{product.title}</h3>
            <h2 className='product-price'>{product.price}</h2>
            <p className='product-ratings'>⭐🌟🌟rating:{product.rating.rate}<br/>productcount:{product.rating.count}</p>       
          </div>
        ))}
      </div>
      <div>{loading && <Loading/> }</div>
      <div>{error && <h1>pls try later network issue</h1>}</div>
      {/* {selectedProduct && (
         <div>
           <h2>Selected Product</h2>
           <h3>{selectedProduct.title}</h3>
           <h2>${selectedProduct.price}</h2>
           <img src={selectedProduct.image} width="100" alt={selectedProduct.title} />
         </div>
       )} */}
    </div>
  )
}
export default App