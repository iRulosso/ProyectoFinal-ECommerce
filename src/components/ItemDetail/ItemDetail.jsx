import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { CarritoContext } from '../../Context/CarritoContext';

const ItemDetail = ({ id, nombre, precio, img, stock, descripcion }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const {agregarProducto} = useContext(CarritoContext);

  const handlerCantidad = (cantidad) => {
    setAgregarCantidad(cantidad); 
    const item = {id, nombre, precio, img, descripcion};
    agregarProducto(item, cantidad);
  }

  return (
    <div className='contenedorItem'>
      <img src={img} alt={nombre}  className="imagen"/>
      <div className='nombre'>
        <h3>{nombre}</h3>
        <div className='Detalles'>
          <h3 className='Precio'>${precio}</h3>
          <p className='descripcion'>{descripcion}</p>
          {
            agregarCantidad > 0 ? (<Link to="/cart"> Terminar compra </Link>) : (<ItemCount minimo={1} stock={stock} FuncionAgregar={handlerCantidad} />)
          }
        </div>
      </div>
    </div >
  )
}

export default ItemDetail