import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Product from './Product';

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.topgear.com/sites/default/files/images/news-article/carousel/2020/01/1447ae84bed729776fe2ab34bd6a7b57/ars6089.jpg?w=976&h=549"
            alt="First slide"
            height="560px"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://visuallightbox.com/content/data/upload/2016/06/bootstrap-carousel1.jpg"
            alt="Second slide"
            height="560px"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.theme-junkie.com/wp-content/uploads/instagram-carousel-examples-5.jpeg"
            alt="Third slide"
            height="560px"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Product />
    </>
  );
}

export default Home;
 