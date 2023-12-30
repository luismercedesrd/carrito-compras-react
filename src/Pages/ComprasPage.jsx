import React, { useContext } from 'react'
import { Card } from '../components/Card'
import { ProductosContext } from '../context/ProductosContext'
import { CarritoContext } from '../context/CarritoContext'

export const ComprasPage = () => {

    const { productos } = useContext( ProductosContext )
    const { listaCompras, agregarCompras, aumentarCompras, disminuirCantidad, eliminarCantidad } = useContext(CarritoContext)

    const handleAgregar = (compra) => {
      agregarCompras(compra)
    }
    const handleQuitar = (id) => {
      eliminarCompras(id)
    }
    const handleAumentar = (id) => {
      aumentarCompras(id)
      
    }
    const handleDisminuir = (id) => {
      disminuirCompras(id)
    }

  return (
    <>
    <h1>Compras:</h1>
    <hr />
    {
        productos.map(producto => (
            <Card key={producto.id}
            imagen={producto.image}
            titulo={producto.title}
            descripcion={producto.description}
            precio={producto.price}
            handleAgregar={() => handleAgregar(producto)}
            handleQuitar ={() => handleQuitar(producto.id)}
            ></Card>
        ))
    }
    
</>
  )
}
