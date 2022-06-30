import Carousel from 'react-bootstrap/Carousel';
import './carousels.css'


function Carousels(imgCarousel) {
    const carouselArray = imgCarousel.imgCarousel;

    return (
        <Carousel className="w-100">
            {carouselArray.map(carouselArray => (
                <Carousel.Item key={carouselArray.id}>
                    <img
                        className=" d-block w-100"
                        src={carouselArray.link_img}
                        alt={carouselArray.id}
                    />
                </Carousel.Item>
            ))}

        </Carousel>
    );
}

export default Carousels;