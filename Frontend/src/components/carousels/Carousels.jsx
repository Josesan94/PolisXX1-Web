import Carousel from 'react-bootstrap/Carousel';
import './carousels.css'

function Carousels() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.diariouno.com.ar/p/b7e48c4d2cb6eeb8a8de10915a99103a/adjuntos/298/imagenes/005/920/0005920095/coronavirus-los-jovenes-deberan-esperar-la-vacunajpg.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.diariouno.com.ar/p/b7e48c4d2cb6eeb8a8de10915a99103a/adjuntos/298/imagenes/005/920/0005920095/coronavirus-los-jovenes-deberan-esperar-la-vacunajpg.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://codimat.com.ar/wp-content/uploads/2018/06/not_jovenes_1.jpg'
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;