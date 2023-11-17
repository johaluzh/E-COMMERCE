import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Inicio from './Pages/Inicio';
import Nosotros from './Pages/Nosotros';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetalleProducto from './Pages/DetalleProducto.jsx';
import OfertasList from './Pages/Ofertas';
import ProductosList from './Pages/Productos';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/inicio" element={<Inicio />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/productos" element={<ProductosList />} />
      <Route path="/producto/:id" element={<DetalleProducto />} />
      
      <Route path="/ofertas" element={<OfertasList />} />
      <Route path="/*" element={<h1>Page not found</h1>}/>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
)
