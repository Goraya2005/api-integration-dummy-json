
'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Products(){
  const [products, setProducts] = useState([]);

  useEffect(()=>{

    getProducts()
  },[])

  const getProducts = async () => {
    try {
      const result = await axios.get('https://dummyjson.com/products?limit=10&skip=10&select=title,price');
      console.log('List of Products fetched through axios from Dummy JSON', result.data.products);
      setProducts(result.data.products);
    } catch (error) {
      console.log('API is not properly fetched', error);
    }
  }

  return(
    <div>
      <h1>LIST OF PRODUCTS</h1>
      <button onClick={getProducts}>Get Products</button>
      {products.map((product) => (
        <div key={product.id}>
          {product.id} - {product.title} - {product.price}
        </div>
      ))}
    </div>
  )
}