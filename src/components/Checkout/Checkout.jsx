import { useState, useContext } from "react"
import { CarritoContext } from "../../Context/CarritoContext"
import { db } from "../../Services/Firebase/Config"
import { collection, addDoc } from "firebase/firestore"
import './Checkout.css'

const Checkout = () => {

    const { carrito, vaciarCarrito } = useContext(CarritoContext);
    const dineroTotal = carrito.reduce((total, producto) => total + producto.item.precio * producto.cantidad, 0);

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [error, setError] = useState("");
    const [ordenID, setOrdenID] = useState("");

    const HandleSubmit = (e) => {
        e.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConf) {
            setError("Por favor complete todos los campos.");
            return;
        }

        if (email !== emailConf) {
            setError("No coinciden los campos de correo.");
            return;
        }

        const Orden =
        {
            items: carrito.map((producto) => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad,
            })),
            total: carrito.reduce((total, producto) => total + producto.item.precio * producto.cantidad, 0),
            nombre,
            apellido,
            telefono,
            email
        };

        addDoc(collection(db, "ordenes"), Orden)
            .then((docRef) => {
                setOrdenID(docRef.id);
                vaciarCarrito();
            })
            .catch((error) => {
                console.error("ERROR AL CREAR LA ORDEN: ", error);
                setError("Se produjo un error al crear la orden, intentelo mas tarde.");
            })

        setNombre("");
        setApellido("");
        setEmail("");
        setTelefono("");
        setEmailConf("");
    }

    return (
        <div className="Contenedor">
            <form onSubmit={HandleSubmit}>
            <h2>Checkout</h2>
                {carrito.map((producto) => (
                    <div key={producto.item.id}>
                        <p>
                            {producto.item.nombre} x {parseInt(producto.cantidad)}
                        </p>
                        {console.log("precio es un" + typeof producto.item.precio)}
                        <p>${parseInt(producto.item.precio) * parseInt(producto.cantidad)}</p>
                        <hr />
                    </div>
                ))
                }
                <p>TOTAL: ${dineroTotal}</p>
                <hr />
                <div className="campos">
                    <label htmlFor="">Nombre</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    <label htmlFor="">Apellido</label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                    <label htmlFor="">Telefono</label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                    <label htmlFor="">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="">Confirm Email</label>
                    <input type="email" value={emailConf} onChange={(e) => setEmailConf(e.target.value)} />
                </div>

                {error && <p style={{ color: "red" }}> {error} </p>}

                <button type="submit"> Finalizar Compra</button>
                {
                ordenID && (
                    <strong>¡Gracias por tu compra! Tu numero de orden es: {ordenID} </strong>
                )
            }
            </form>

        </div>
    )
}

export default Checkout