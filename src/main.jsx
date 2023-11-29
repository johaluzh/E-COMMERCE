import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home.jsx';
import Nosotros from './Pages/Nosotros';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetalleProducto from './Pages/DetalleProducto.jsx';
import OfertasList from './Pages/Ofertas';
import ProductosList from './Pages/Productos';
import App from './App.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home  />} />
      <Route path="/nosotros" element={<Nosotros />} />
     
      <Route path="/productos" element={<ProductosList />} />
      <Route path="/producto/:id" element={<DetalleProducto />} />
      <Route path="/ofertas" element={<OfertasList />} />
      <Route path="/*" element={<h1>Page not found</h1>}/>
      
      
   
      
      
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
)
