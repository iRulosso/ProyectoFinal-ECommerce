import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({minimo, stock, FuncionAgregar}) => {

    const [contador, setContador] = useState(minimo);

    const Incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const Decrementar = () => {
        if (contador > minimo) {
            setContador(contador - 1);
        }
    }

    return (
        <>
            <div className='contador'>
                <button onClick={Decrementar} className='pulsador'>-</button>
                <p>{contador}</p>
                <button onClick={Incrementar} className='pulsador'>+</button>
            </div>
            <button onClick={() => FuncionAgregar(contador)} className='Agregar'>Agregar</button>
        </>
    )
}

export default ItemCount