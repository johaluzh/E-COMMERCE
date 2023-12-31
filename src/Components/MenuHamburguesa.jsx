import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carrito from './Carrito';

function MenuHamburguesa({ carrito, mostrarCarrito, setMostrarCarrito, vaciarCarrito, eliminarDelCarrito, agregarAlCarrito, mostrarMenu, setMostrarMenu }) {
  const [menuAbierto, setMenuAbierto] = useState(mostrarMenu);

  useEffect(() => {
    setMenuAbierto(mostrarMenu);
  }, [mostrarMenu]);

  const cerrarMenu = () => {
    setMenuAbierto(false);
    setMostrarMenu(false);
  };

  const mostrarCarritoHandler = () => {
    setMostrarCarrito(true);
    cerrarMenu();
  };

  const agregarAlCarritoYMostrar = (producto) => {
    agregarAlCarrito(producto);
    mostrarCarritoHandler();
    setMenuAbierto(true); // Abrir el menú automáticamente al agregar productos
  };

  const eliminarDelCarritoYCerrarMenu = (id, cantidad) => {
    eliminarDelCarrito(id, cantidad);
    setMenuAbierto(true); // No cerrar el menú al quitar productos
  };
  ;

  return (
    <>
      <div className={`menu-hamburguesa ${menuAbierto ? 'abierto' : ''}`} onClick={() => setMenuAbierto(!menuAbierto)}>
        <div className="barra"></div>
        <div className="barra"></div>
        <div className="barra"></div>
      </div>

      <nav className={`nav-principal ${menuAbierto ? 'abierto' : 'cerrado'}`}>
      <ul>
      <ul>
          <Link to="/Home">Inicio</Link>
          <Link to="/Productos">Productos</Link>
          <Link to="/Ofertas">Ofertas</Link>
          <Link to="/Nosotros">Nosotros</Link>
        </ul>
      </ul>

        <div onClick={mostrarCarritoHandler}>
          <Carrito
            carrito={carrito}
            mostrarCarrito={mostrarCarrito}
            setMostrarCarrito={setMostrarCarrito}
            vaciarCarrito={vaciarCarrito}
            eliminarDelCarrito={eliminarDelCarritoYCerrarMenu}  
            agregarAlCarrito={agregarAlCarrito}
            
          />
        </div>
      </nav>
    </>
  );
}

export default MenuHamburguesa;






