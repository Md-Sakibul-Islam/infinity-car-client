import React from "react";
import { Carousel } from "react-bootstrap";
import sliderOne from "../../images/slider/slider-1.png";
import sliderTwo from "../../images/slider/slider-2.png";
import sliderThree from "../../images/slider/slider-3.png";
import sliderFour from '../../images/slider/slider-4.png'

const Banner = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={sliderOne} alt="First slide" />
          <Carousel.Caption>
            <h3>Infinity Car</h3>
            <p>	Good Car for Good Moments.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={sliderThree} alt="Second slide" />

          <Carousel.Caption>
            <h3>Infinity Car</h3>
            <p>Made only for You</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={sliderTwo} alt="Third slide" />

          <Carousel.Caption>
            <h3>Infinity Car</h3>
            <p>
             Fast Your Car
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={sliderFour} alt="Third slide" />

          <Carousel.Caption>
            <h3>Infinity Car</h3>
            <p>
            Make love with the roads
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
