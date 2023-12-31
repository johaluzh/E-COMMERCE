import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MiniNav from '../Components/MiniNav';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import MenuHamburguesa from '../Components/MenuHamburguesa';

function Producto({ producto, agregarAlCarrito }) {
  const { id, imagen, nombre, marca, precio, cuotas } = producto;

  return (
    <div className='div-card'>
      <div className='img-container'>
        <img src={imagen} alt={nombre} width={200} height={200} />
      </div>
      <h3>{nombre}</h3>
      <h6>{marca}</h6>
      <h5>Precio: {parseFloat(precio.replace(/[^\d.]/g, '')).toFixed(2)}</h5>
      <p>{cuotas}</p>
      <div className='container-buttons'>
        <Link to={`/producto/${id}`}>
          <button className="ver-mas">Ver Más</button>
        </Link>
        <button className="agregar-carrito" onClick={() => { agregarAlCarrito(producto); }}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

Producto.propTypes = {
  producto: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imagen: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    marca: PropTypes.string.isRequired,
    precio: PropTypes.string.isRequired,
    cuotas: PropTypes.string.isRequired,
  }).isRequired,
  agregarAlCarrito: PropTypes.func.isRequired,
};

function ProductosList() {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [mostrarMenu, setMostrarMenu] = useState(false);

  const agregarAlCarrito = (producto) => {
    const productoEnCarrito = carrito.find((p) => p.id === producto.id);

    if (productoEnCarrito) {
      const nuevoCarrito = carrito.map((p) =>
        p.id === producto.id
          ? {
              ...p,
              cantidad: p.cantidad + 1,
              total: (p.cantidad + 1) * p.precio,
            }
          : p
      );
      setCarrito(nuevoCarrito);
    } else {
      const precioNumerico = parseFloat(producto.precio.replace(/[^\d.]/g, ''));
      setCarrito([
        ...carrito,
        {
          ...producto,
          precio: precioNumerico,
          cantidad: 1,
          total: precioNumerico,
        },
      ]);
    }

    setMostrarCarrito(true);
    setMostrarMenu(true);
  };

  const eliminarDelCarrito = (id) => {
    const productoEnCarrito = carrito.find((p) => p.id === id);

    if (productoEnCarrito.cantidad > 1) {
      const nuevoCarrito = carrito.map((producto) =>
        producto.id === id
          ? { ...producto, cantidad: producto.cantidad - 1, total: (producto.cantidad - 1) * producto.precio }
          : producto
      );
      setCarrito(nuevoCarrito);
    } else {
      const nuevoCarrito = carrito.filter((producto) => producto.id !== id);
      setCarrito(nuevoCarrito);
    }
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  useEffect(() => {
    fetch('/productos.json')
      .then((response) => response.json())
      .then((data) => setProductos(data.productos))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <>
      <MiniNav />
      <NavBar
        carrito={carrito}
        mostrarCarrito={mostrarCarrito}
        setMostrarCarrito={setMostrarCarrito}
        vaciarCarrito={vaciarCarrito}
        eliminarDelCarrito={eliminarDelCarrito}
        agregarAlCarrito={agregarAlCarrito}
      />

      <MenuHamburguesa
        carrito={carrito}
        mostrarCarrito={mostrarCarrito}
        setMostrarCarrito={setMostrarCarrito}
        vaciarCarrito={vaciarCarrito}
        eliminarDelCarrito={eliminarDelCarrito}
        agregarAlCarrito={agregarAlCarrito}
        mostrarMenu={mostrarMenu}
        setMostrarMenu={setMostrarMenu}
      />

      <div className="titulo-container">
        <h1>Todos nuestros productos:</h1>
      </div>
      <div className="container-productos">
        {productos.map((producto) => (
          <Producto key={producto.id} producto={producto} agregarAlCarrito={agregarAlCarrito} />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default ProductosList;

