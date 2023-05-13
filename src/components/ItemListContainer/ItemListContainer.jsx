import { useState, useEffect } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemsList/ItemList';
import { useParams } from "react-router-dom";
import { collection, getDocs, where, query} from "firebase/firestore"
import { db } from '../../Services/Firebase/Config';

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const [categoria, setCategoria] = useState([]);

  const {idCategoria} = useParams();

  console.log(idCategoria);

  useEffect( ()=> {
    const misProductos = idCategoria ? query(collection(db, "productos"), where("idCat", "==", idCategoria)): collection(db, "productos");

    getDocs(misProductos)
        .then(res=> {
            const nuevosProductos = res.docs.map( doc => {
                const data = doc.data()
                return {id:doc.id, ...data}
            })
            setProducts(nuevosProductos);
            idCategoria ? setCategoria(idCategoria) : setCategoria("Productos");
        })
        .catch(error => console.log(error))
}, [idCategoria])

  return (
    <div>
      <p className='categoriaTitulo'>{categoria}</p>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer