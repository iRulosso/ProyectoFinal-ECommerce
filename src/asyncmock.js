const products = [//Mouse = 1, teclado = 2, auriculares = 3, camaras = 4
    {
        nombre: "Mouse Gamer Dragon",
        precio: 500, stock: 10, id: "1",
        img: "../img/mouse.jpg",
        idCat: 1
    },
    {
        nombre: "Teclado Mecanico Hyper X",
        precio: 2500, stock: 10, id: "2",
        img: "../img/teclado.jpg", 
        idCat: 2
    },
    {
        nombre: "Auricular Logitech G543",
        precio: 5500, stock: 10, id: "3",
        img: "../img/auriculares.jpg",
        idCat: 3
    },
    {
        nombre: "Camara Logitech B324",
        precio: 3500, stock: 10, id: "4",
        img: "../img/camara.png",
        idCat: 4
    },
    {
        nombre: "Camara Genius R30",
        precio: 1500, stock: 7, id: "5",
        img: "../img/webCamGenius.jpg",
        idCat: 4
    },
    {
        nombre: "Teclado Kumara K555",
        precio: 6500, stock: 15, id: "6",
        img: "../img/tecladoKumara.jpg",
        idCat: 2
    },
    {
        nombre: "Auriculares Cloud",
        precio: 15700, stock: 4, id: "7",
        img: "../img/auriCloud.jpg",
        idCat: 3
    },
    {
        nombre: "Mouse Ergonomico Razer",
        precio: 7999, stock: 9, id: "8",
        img: "../img/mouseErgoRazer.jpg",
        idCat: 1
    }
]

export const getProducts = () => {
    return new Promise((resuelto) => {
        setTimeout(() => {
            resuelto(products);
        }, 100)
    })
}

export const GetUnProducto = (id) => {
    return new Promise(resuelto => {
        setTimeout(() => {
            const producto = products.find(prod => prod.id === id);
            resuelto(producto);
        }, 100)
    })
}


export const GetProductosPorCategoria = (idCategoria) => {
    return new Promise(resuelto => {
        setTimeout(() => {
            const productosCategoria = products.filter(prod => prod.idCat === idCategoria);
            resuelto(productosCategoria);
        }, 100)
    })
}