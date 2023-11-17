import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MiniNav from '/src/Components/MiniNav';
import NavBar from '/src/Components/NavBar';
import Footer from '../Components/Footer';

function DetalleProducto() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetch('/productos.json')
      .then((response) => response.json())
      .then((data) => {
        const productoSeleccionado = data.productos.find((p) => p.id === parseInt(id, 10));
        setProducto(productoSeleccionado);
      })
      .catch((error) => console.error('Error:', error));
  }, [id]);

  if (!producto) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <MiniNav />
      <NavBar />

      <div className='img-container-detalle'>
        <img src={producto.imagen} alt={producto.nombre} width={400} height={400} />
      </div>

      <div className='detalle-producto'>
        <h2>Detalles del Producto:</h2>
        <h4>{producto.nombre}</h4>
        <h5>Marca: {producto.marca}</h5>
        <h5>Precio: {producto.precio}</h5>
      </div>

      <div className='descripcion-producto'>
        <p>{producto.descripcion}</p>
      </div>

      <div className='notas'>
        <dt>Notas de salida:</dt>
        <dd>{producto.salida}</dd>
        <dt>Notas de Corazón:</dt>
        <dd>{producto.corazon}</dd>
        <dt>Notas de Fondo:</dt>
        <dd>{producto.fondo}</dd>
      </div>
      <Footer />
    </>
  );
}

export default DetalleProducto;






