import AutoCarousel from "../Components/AutoCarousel";
import Footer from "../Components/Footer";
import MiniNav from "../Components/MiniNav";
import NavBar from "../Components/NavBar";


export  function Inicio() {
  return (
    <>
    <div>
     <MiniNav />
     <NavBar />
     <AutoCarousel />
     <Footer />
  </div>
 </>
  )
}
export default Inicio;
