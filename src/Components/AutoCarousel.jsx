
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa los estilos de Bootstrap

const AutoCarousel = () => {
  return (
    <Carousel className="Carousell"   >
      <Carousel.Item  className="carousel-img" >
        <img
          className="d-block w-100"
          src="/Carousel/MUG-AD1.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Carousel/Foto perfume carousel2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Carousel/Foto perfume carousel3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      {/* Agrega más elementos Carousel.Item según sea necesario */}
    </Carousel>
  );
};

export default AutoCarousel;

