import React from 'react';
import { Link } from 'react-router-dom';
import Carrito from '../Components/Carrito';

export function NavBar({ carrito, mostrarCarrito, setMostrarCarrito, vaciarCarrito, eliminarDelCarrito, agregarAlCarrito }) {
  return (
    <>
      <nav>
        <ul>
          <Link to="/Home">Inicio</Link>
          <Link to="/Productos">Productos</Link>
          <Link to="/Ofertas">Ofertas</Link>
          <Link to="/Nosotros">Nosotros</Link>
        </ul>

        <Carrito
           carrito={carrito}  
           mostrarCarrito={mostrarCarrito}
           setMostrarCarrito={setMostrarCarrito}
           vaciarCarrito={vaciarCarrito}
           eliminarDelCarrito={eliminarDelCarrito}
           agregarAlCarrito={agregarAlCarrito}
        />
      </nav>
    </>
  );
}

export default NavBar;


