import React from "react";
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';

const Carousel = ({children, ...rest}) => {
  return (
    <ResponsiveCarousel emulateTouch showStatus={false} infiniteLoop useKeyboardArrows {...rest} >
      {
        children
      }  
    </ResponsiveCarousel>
  );
};

export default Carousel;

