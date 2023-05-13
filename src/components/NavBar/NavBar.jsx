import React from 'react'
import './NavBar.css'
import CardWidget from '../CardWidget/CardWidget'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <Link to={"/"} className="logo">
      <img src="../../../img/logo.png" alt="logo" className='logoImg' />  
      </Link>

      <ul>
        <li>
          <NavLink to={`/categoria/Mouse`} className="categoria">Mouses</NavLink>
        </li>
        <li>
          <NavLink to={`/categoria/Teclados`} className="categoria">Teclados</NavLink>
        </li>
        <li>
          <NavLink to={`/categoria/Auriculares`} className="categoria">Auriculares</NavLink>
        </li>
        <li>
          <NavLink to={`/categoria/Webcam`} className="categoria">Camaras</NavLink>
        </li>
      </ul>

      <CardWidget />

    </header>
  )
}

export default NavBar