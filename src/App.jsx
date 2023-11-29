

import '/public/CSS/Index.css'// Corrige la ruta al archivo de estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from "./Components/NavBar";
import MiniNav from "./Components/MiniNav";
import Footer from "./Components/Footer";
import MenuHamburguesa from './Components/MenuHamburguesa';


function App() {
  
  return (
    <>
     
     <MiniNav />
     <MenuHamburguesa />
     <NavBar />
     
     
     <Footer />
    
     
    
    
    </>
  );
}

export default App;

