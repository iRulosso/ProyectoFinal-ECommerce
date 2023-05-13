import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './Context/CarritoContext';
import Cart from './components/Cart/Cart';
import AgregarProducto from './components/AgregarProducto/AgregarProducto copy';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />}></Route>
            <Route path='/categoria/:idCategoria' element={<ItemListContainer />}></Route>
            <Route path='/item/:idItem' element={<ItemDetailContainer />} ></Route>
            <Route path="/cart" element={<Cart/>}   />
            <Route path="/checkout" element={<Checkout/>}   />
            <Route path='*' element={<h2>Sitio en Construccion</h2>} />
          </Routes>
          
        </CarritoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
