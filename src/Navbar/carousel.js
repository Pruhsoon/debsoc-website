import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function DarkVariantExample() {
  return (
    <Carousel
      data-bs-theme="dark"
      style={{
        backgroundColor: 'transparent', // Set the background color to transparent
        border: 'none', // Remove the border
      }}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images\colloq\nsmteam.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images\colloq\nsmgirlies.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="\images\colloq\nsmmotions.JPG"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
