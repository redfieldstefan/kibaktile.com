import React from "react";
import Slider from "react-slick";
import CarouselArrow from "../components/carousel-arrow";

const Carousel = ({slides, thumbs, slidesToScroll, slidesToShow, ...restOfProps}) => {

  const carouselSettings = {
    nextArrow: <CarouselArrow next />,
    prevArrow: <CarouselArrow prev />,
    dotsClass: 'slick-dots slick-thumb'
  };


  return(
    <Slider
      className="carousel"
      slidesToScroll={slidesToScroll}
      slidesToShow={slidesToShow}
      {...carouselSettings}
      dots={true}
    >
      {
        slides.map((img, i) => (
          <img key={i} className="tiles-main-img" src={img} />)
        )
      }
    </Slider>
  )
};

Carousel.defaultProps ={
  slidesToShow: 3,
  slidesToScroll: 1
};

export default Carousel;

