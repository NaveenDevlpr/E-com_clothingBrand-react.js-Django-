import React, { useEffect } from 'react'
import './Bannerfour.css';
import { useState } from 'react';
import Card from '../Card/Card';
const BannerFour = () => {

    const [products,setProducts]=useState([])

    useEffect(() => {
        const getProducts=async()=>{
            const response=await fetch('https://fakestoreapi.com/products')
            const data=await response.json()
            setProducts(data)
        }
        getProducts()
        
    }, [])

    
  return (
        <></>
  )
}

export default BannerFour