import React from "react";
import { Link } from "gatsby";
import nextArrow from "../assets/images/icons/next-arrow.png";
import prevArrow from "../assets/images/icons/prev-arrow.png";

const NextPrevPattern = ({pattern, direction}) => (
  <Link className={`NextPrevPattern ${direction}`} to={pattern.url}>
    <span className="NextPrevPattern-img">
      <img src={pattern.lineDrawing} />
    </span>
    <div className={`text-and-arrow ${direction}`}>
    <span className="text-and-arrow-name">{pattern.name}</span>
      {
        (direction === "next") &&
        <img className="NextPrevPattern-arrow" src={nextArrow}/>
      }
      {
        (direction === "previous") &&
        <img className="NextPrevPattern-arrow" src={prevArrow} />
      }
    </div>
  </Link>
);

export default NextPrevPattern;
