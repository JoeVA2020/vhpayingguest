import React from 'react';
import carouselImage1 from '../Images/c1.jpg'
import carouselImage2 from '../Images/c2.jpg'
import carouselImage3 from '../Images/c3.jpg'
import carouselImage4 from '../Images/c4.jpg'
import carouselImage5 from '../Images/c5.jpg'
import carouselImage6 from '../Images/c6.jpg'
import carouselImage7 from '../Images/c7.jpg'
import './hero.css'
import Carousel from 'react-bootstrap/Carousel';
function Hero() {
  return (
    <div className='hero_container'>
        <Carousel className='carousel'>
      <Carousel.Item interval={1000}>
      <img src={carouselImage1} alt="" srcset="" />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img src={carouselImage2} alt="" srcset="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={carouselImage3} alt="" srcset="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={carouselImage4} alt="" srcset="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={carouselImage5} alt="" srcset="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={carouselImage6} alt="" srcset="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={carouselImage7} alt="" srcset="" />
      </Carousel.Item>
    </Carousel>
    </div>
    
  );
}

export default Hero;