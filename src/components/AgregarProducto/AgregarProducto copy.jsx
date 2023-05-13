import { useState } from "react"
import { db } from "../../Services/Firebase/Config"
import { collection, addDoc } from "firebase/firestore"
import './AgregarProducto.css'

const AgregarProducto = () => {
  const [idCat, setIdCat] = useState("");
  const [img, setImg] = useState("");
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState(0);
  const [stock, setStock] = useState(0);

  const HandleForm = (e) => {
    e.preventDefault();

    addDoc(collection(db, "productos"), {
      idCat: idCat,
      img: img,
      nombre: nombre,
      precio: precio,
      stock: stock
    })

    setIdCat("");
    setImg("");
    setNombre("");
    setPrecio(0);
    setStock(0);
  }

  return (
    <form onSubmit={HandleForm}>
      <label htmlFor="">Categoria</label>
      <input type="text" value={idCat} onChange={(e) => setIdCat(e.target.value)} required />
      <label htmlFor="">Imagen</label>
      <input type="text" value={img} onChange={(e) => setImg(e.target.value)} required />
      <label htmlFor="">Nombre</label>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
      <label htmlFor="">Precio</label>
      <input type="text" value={precio} onChange={(e) => setPrecio(e.target.value)} required />
      <label htmlFor="">Stock</label>
      <input type="text" value={stock} onChange={(e) => setStock(e.target.value)} required />
      <button type="submit"> Cargar </button>
    </form>
  )
}

export default AgregarProducto