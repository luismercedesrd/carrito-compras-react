import React, { useEffect, useState } from 'react'
import { ProductosContext } from './ProductosContext'

export const ProductosProvider = ({ children }) => {


    const [productos, setproductos] = useState([])

    const fetchProductos = async() => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        console.log(data)
        setproductos(data)
        
      } catch (error) {
        console.error('Ha ocurrido un error', error)
      }
  
       
    }
  
    useEffect(() => {
      fetchProductos()
    
      
    }, [])


  return (
    <ProductosContext.Provider value={{ productos }}>
        {children}
    </ProductosContext.Provider>
  )
}
