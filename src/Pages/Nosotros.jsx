import Footer from "../Components/Footer";
import MenuHamburguesa from "../Components/MenuHamburguesa";
import MiniNav from "../Components/MiniNav";
import NavBar from "../Components/NavBar";


export default function Nosotros() {
  return (
    <>
      <MiniNav />
      <NavBar />
      <MenuHamburguesa />
    <div className="essenza-bella">
      <h1>Essenza Bella</h1>
    </div>

    <div className="container-nosotros">

    <h2>Historia de Essenza Bella:</h2>

    <dt>Orígenes:</dt>
          <dd>Essenza Bella nació de la pasión por las fragancias exquisitas y la búsqueda incansable de la verdadera esencia de la elegancia. Fundada en 1983, nuestra perfumería tiene sus raíces en Recoleta, donde comenzamos como una pequeña boutique dedicada a ofrecer experiencias olfativas únicas.</dd>
    <dt>Evolución:</dt>
          <dd>Desde nuestros modestos comienzos, hemos experimentado un crecimiento significativo. Nos hemos convertido en un referente en el mundo de las fragancias, gracias a nuestra dedicación a la calidad, la innovación y la atención personalizada a cada cliente.</dd>
    </div>
    
    <div className="mision">
    
     <h2>Misión y Visión:</h2>

       <dt>Misión:</dt>
            <dd>En Essenza Bella  nuestra misión es trascender las expectativas, llevando a nuestros clientes a un viaje sensorial único. Buscamos no solo vender perfumes, sino crear experiencias que despierten emociones y recuerdos perdurables.</dd>
       <dt>Visión:</dt>
            <dd>Aspiramos a ser reconocidos como la perfumería líder en ofrecer fragancias exclusivas y asesoramiento experto. Queremos ser la elección natural para aquellos que buscan la sofisticación y la autenticidad en cada gota.</dd>

    </div>        
    
    <div className="valores">
        <h2>Valores:</h2> 

       <dt>Pasión por la Perfumería: </dt>
           <dd>Nos apasiona el mundo de las fragancias y compartimos esa pasión con cada cliente.</dd>
       <dt>Autenticidad: </dt>
           <dd> Creemos en la autenticidad de cada fragancia y en la autenticidad en nuestras interacciones.</dd> 
       <dt>Compromiso con la Calidad:</dt>
           <dd> Nos comprometemos a ofrecer solo las fragancias de la más alta calidad, seleccionadas cuidadosamente.</dd> 

    </div>
    
    <Footer />


    
    </>
  )
}
