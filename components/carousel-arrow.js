import React from "react";
import classnames from "classnames";
import nextArrow from "../assets/images/arrow-next.png";
import prevArrow from "../assets/images/arrow-prev.png";

const CarouselArrow = ({className, next, prev, ...restOfProps}) => (
  <button className={classnames(className, "CarouselArrow")} {...restOfProps} >
    {
      next &&
      <img className="arrow-icon" src={nextArrow} />
    }
    {
      prev &&
      <img className="arrow-icon" src={prevArrow} />
    }
  </button>
);

export default CarouselArrow;
