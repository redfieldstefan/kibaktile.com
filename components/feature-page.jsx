import BasePage from "./base-page";
import { Carousel } from 'react-responsive-carousel';
import React, { Component } from "react";

export default class FeaturePage extends Component {
  render() {
    const { description, name, installs } = this.props.pattern;

    return (
      <BasePage className="FeaturePage">
        <div className="feature-page-hero" style={{backgroundImage: `url(${installs[0]})`}}>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        <div className="pattern-carousel">
          <Carousel emulateTouch showStatus={false} infiniteLoop useKeyboardArrows>
            { installs.map((image) => {
              return (
                <div className="carousel-img-container">
                  <img src={image} />
                </div>
              );
            })}
          </Carousel>
        </div>
      </BasePage>
    );
  }
};
