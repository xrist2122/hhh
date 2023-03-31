import Carousel from 'react-bootstrap/Carousel';
import './Slider.css'
function UncontrolledExample() {
  return (
    <div className='mainSlider'>
    <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="/img/IMAGE 2023-03-11 20:51:52.jpg"
          alt="First slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/IMAGE 2023-03-11 20:51:52.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/IMAGE 2023-03-11 20:51:52.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
            
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}


export default UncontrolledExample;