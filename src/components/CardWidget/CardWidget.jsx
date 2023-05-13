import React from 'react'
import './CardWidget.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../../Context/CarritoContext';

const CardWidget = () => {
  const { carrito } = useContext(CarritoContext);
  const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);
  const imgCarrito = "../../../img/CarritoLogo.png";
  return (
    <div className='aa'>
      <Link to='/cart' className='aa'>
        <img src={imgCarrito} alt="Carrito" className='imgCarrito'/>
        <p>Mi Carrito</p>
        <p className='cantidad'>{totalCantidad}</p>
      </Link>
    </div>
  )
}

export default CardWidget