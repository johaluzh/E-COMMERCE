import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Carrito = ({ carrito, mostrarCarrito, setMostrarCarrito, vaciarCarrito, eliminarDelCarrito, agregarAlCarrito }) => {
  const toggleCarrito = () => {
    setMostrarCarrito(!mostrarCarrito);
  };

  const precioTotal = carrito
    ? carrito.reduce((total, producto) => total + producto.total, 0).toFixed(2)
    : '0.00';

  return (
    <div className="carrito-container">
      <div className="carrito-icon" onClick={toggleCarrito}>
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>
      {mostrarCarrito && (
        <div className="carrito-content">
          <h4>Carrito de Compras</h4>
          {carrito.length === 0 ? (
            <p>El carrito está vacío.</p>
          ) : (
            <>
              <ul>
                {carrito.map((producto) => (
                  <li className="lista-carrito" key={producto.id}>
                    <h5>{producto.nombre}</h5>
                    <img src={producto.imagen} alt={producto.nombre} width={50} height={50} />
                    <h6>Precio: ${parseFloat(producto.precio).toFixed(2)}</h6>
                    <h6>Cantidad: {producto.cantidad}</h6>
                    <button onClick={() => eliminarDelCarrito(producto.id, producto.cantidad)}>
                      Eliminar
                    </button>
                  </li>
                ))}
              </ul>
              <h4>Total: ${precioTotal}</h4>
              <button onClick={vaciarCarrito}>Vaciar Carrito</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Carrito;