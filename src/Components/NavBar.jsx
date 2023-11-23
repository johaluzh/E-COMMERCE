import { Link } from "react-router-dom";




export function NavBar() {
  return (
    <nav>
    <ul>
       <Link to="/Inicio">Inicio</Link>
       <Link to="/Productos">Productos</Link>
       <Link to="/Ofertas">Ofertas</Link>
       <Link to="/Nosotros">Nosotros</Link>
       
       
    </ul>
    
    </nav>
  )
}

export default NavBar;
