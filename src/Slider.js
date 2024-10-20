import { Button } from 'bootstrap';
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


function Slider() {
  return (
    <div>
       <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/c/_/c_c-1_2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/w/e/web-banner_1_.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/c/_/c_c-1_2.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          
          <p>
            
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Slider
