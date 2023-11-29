

function Footer() {
  
    return (
    <div className="footer-principal">
    
    <ul className="container-redes">
   
      <li> <a href="https://www.instagram.com/"><img src="/Redes/Instagram.png" className="png-redes" alt="Nuestro Instagram"/> </a>   </li>
      <li> <a href="https://es-la.facebook.com/"><img src="/Redes/facebook.png" className="png-redes"  alt="Nuestro Facebook"/> </a> </li>
      <li> <a href="https://twitter.com/"><img src="/Redes/Twitter.png" className="png-redes" alt="Nuestro Twitter"/> </a></li>

      <li> <a href="whatsapp://send?phone=+541234543467"><img src="/Redes/WhatsApp.png" className="png-redes" alt="Nuestro WhatsApp"/> </a></li>
   
    </ul>
    
    <ul className="container-ubicacion">

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37155.78010363324!2d-58.59208936746912!3d-34.60067154181684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacb9f8ff113%3A0x22fd08da6711928d!2sUniversidad%20Nacional%20de%20Tres%20de%20Febrero%20-%20Sede%20Caseros%20I!5e0!3m2!1ses!2sar!4v1689887024371!5m2!1ses!2sar" width="700px"> </iframe>

    </ul>
    
    <ul className="faq">
    <li><a href="#preguntas-frecuentes">Preguntas Frecuentes</a></li>
      <li><a href="#beneficios-y-formas-de-pago">Beneficios y Formas de Pago</a></li>
      <li><a href="#metodos-de-envio">Métodos de Envío</a></li>
      <li><a href="#terminos-y-condiciones">Términos y Condiciones</a></li>
      <li><a href="#cambios-y-devoluciones">Cambios y Devoluciones</a></li>
      <li><a href="#defensa-al-consumidor">Defensa al Consumidor</a></li>
    </ul>
    
    </div>
  );
}

export default Footer;