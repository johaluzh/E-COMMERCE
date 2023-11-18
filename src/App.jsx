
import AutoCarousel from "./Components/AutoCarousel";
import '/public/CSS/Index.css'// Corrige la ruta al archivo de estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from "./Components/NavBar";
import MiniNav from "./Components/MiniNav";
import Footer from "./Components/Footer";

function App() {
  
  return (
    <>
     <MiniNav />
     <NavBar />
     <AutoCarousel />
     <Footer />
    
    
    </>
  );
}

export default App;

