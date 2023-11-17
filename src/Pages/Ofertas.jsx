import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import MiniNav from '../Components/MiniNav';
import Footer from '../Components/Footer';

function Producto({ producto }) {
  const { id, imagen, nombre, marca, precio, cuotas } = producto;

  return (
    <div className='div-card'>
      <div className='img-container'>
        <img src={imagen} alt={nombre} width={200} height={200} />
      </div>
      <h3>{nombre}</h3>
      <h6>{marca}</h6>
      <h5>Precio: {precio}</h5>
      <p>{cuotas}</p>

      <div className='container-buttons'>
        <Link to={`/producto/${id}`}>
          <button className="ver-mas">Ver Más</button>
        </Link>
        <button className="agregar-carrito">Agregar al carrito</button>
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
};


function OfertasList() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Realizar una solicitud para cargar los datos del archivo "productos.json"
    fetch('/productos.json')
      .then((response) => response.json())
      .then((data) => setProductos(data.productos))
      .catch((error) => console.error('Error:', error));
  }, []);

  // Filtrar productos cuyo precio sea menor a 100000
  const productosFiltrados = productos.filter((producto) => {
    // Eliminar el signo de dólar y la coma en el precio, convertir a número
    const precioNumerico = parseFloat(producto.precio.replace(/[^\d.]/g, ''));
    return precioNumerico < 100000;
  });

  return (
    <>
      <MiniNav />
      <NavBar />

      <div className='titulo-container'>
         <h1>Ofertas destacadas:</h1>
      </div>
     
      <div className='container-productos'>
        {productosFiltrados.map((producto) => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </div>
      
      <Footer />
    </>
  );
}

export default OfertasList;