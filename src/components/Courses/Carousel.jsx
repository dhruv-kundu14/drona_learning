import Carousel from 'react-bootstrap/Carousel';
import './Courses.css';


const baseUrl = process.env.REACT_APP_IMG_URL;

const carouselItems = [
  { id: 1, image: `${baseUrl}/Icons/Background/2.png` },
  { id: 2, image: `${baseUrl}/Icons/Background/4.png` },
  { id: 3, image: `${baseUrl}/Icons/Background/6.png` },
];



const CarouselFade = () => {
  return (
    <div className="carousel">
      <Carousel fade>
        {carouselItems?.map((item) => {

          return (
            <Carousel.Item key={item.id}>
              <img
                className="carousel-img"
                src={item.image}
                alt={`Slide ${item.id}`}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselFade;
