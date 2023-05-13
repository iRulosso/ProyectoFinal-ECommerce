import React from 'react'
import './CartItem.css'

const CartItem = ({item, cantidad}) => {
  return (
    <div className='cartItem'>
        <img src={item.img} alt={item.nombre} />
        <h4> {item.nombre} </h4>
        <p>Cantidad: {cantidad} </p>
        <p>Precio: $ {item.precio} </p>
    </div>
  )
}

export default CartItem