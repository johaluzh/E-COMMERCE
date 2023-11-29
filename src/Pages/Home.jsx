import AutoCarousel from "../Components/AutoCarousel";
import Footer from "../Components/Footer";
import MenuHamburguesa from "../Components/MenuHamburguesa";
import MiniNav from "../Components/MiniNav";
import NavBar from "../Components/NavBar";


export  function Home() {
  return (
    <>
    <div>
     <MiniNav />
     <NavBar />
     <MenuHamburguesa />
     <AutoCarousel />
     <Footer/>
     
     
     
  </div>
 </>
  )
}
export default Home;
