import React, { Component } from "react";
import BasePage from "./base-page";
import { Carousel } from 'react-responsive-carousel';
import NextPrevPattern from "./next-prev-pattern";

class PatternPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pattern: props.pattern
    };
  };

  renderCarousel(slides) {
    return (
      <Carousel emulateTouch showStatus={false} infiniteLoop useKeyboardArrows>
        { slides.map((image) => {
          return (
            <div className="carousel-img-container">
              <img src={image} />
            </div>
          );
        })}
      </Carousel>
    )
  }

  render() {
    return(
      <BasePage>
        <div className="PatternPage">
          <div className="pattern-breadcrumb">
            <a href="/catalog/">Patterns</a>
            <span className="divider">/</span>
            <a href={this.state.pattern.url}>{this.state.pattern.name}</a>
          </div>
          <div className="pattern-text">
            <span className="pattern-title-container">
              <h1 className="pattern-title">{this.state.pattern.name}</h1>
            </span>
            {
              this.state.pattern.description &&
              <p className="pattern-description">{this.state.pattern.description}</p>
            }
          </div>
          <div className="pattern-carousel">
            {
              this.renderCarousel(this.state.pattern.slides)
            }
          </div>
          <div className="next-prev-arrows">
            <NextPrevPattern direction="previous" pattern={this.state.pattern} />
            <NextPrevPattern direction="next"  pattern={this.state.pattern} />
          </div>
        </div>
      </BasePage>
    );
  }
}

export default PatternPage;
