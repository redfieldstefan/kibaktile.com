import React, { Component } from "react";
import BasePage from "./base-page";
import { Carousel } from 'react-responsive-carousel';
import NextPrevPattern from "./next-prev-pattern";
import catalog from "../data/catalog";

const defaultDescription = `Infuse your space with beautiful pattern and color using decorative
  ceramic tile. There are many different ways to feature decorative tile in any project. Use
  decorative tile over a large area to achieve an all-over pattern effect. Or drop-in single
  decorative tiles into solid colored field tile to give a pop of color to your installation.
  Border tiles in 3x6 or 4x8 size are also available to pair with the larger decorative tiles. Each
  tile is hand-painted with ceramic glaze and kiln fired to create a beautiful and durable final
  product. Suitable for interior wall, countertop and low-traffic floors. Exterior use in
  non-freezing climates only. Tile dimensions are 6" x 6" and 8" x 8".`;

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
    const patternIndex = catalog.indexOf(this.state.pattern);
    const lastIndex = catalog.length - 1
    const prevPattern = patternIndex === 0 ? catalog[lastIndex] : catalog[patternIndex - 1];
    const nextPattern = patternIndex === lastIndex ? catalog[0] : catalog[patternIndex + 1];

    return(
      <BasePage
        title={`${this.state.pattern.name} | Kibak Tile`}
        description={this.state.pattern.description}
      >
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

            <span className="pattern-description">
              <p>
                {
                  this.state.pattern.description ? this.state.pattern.description :
                  defaultDescription
                }
              </p>

              <p>
                Suitable for interior wall, countertop and low-traffic floors. Exterior use in
                non-freezing climates only. Tile dimensions are 6" x 6" and 8" x 8".
              </p>
            </span>


          </div>
          <div className="pattern-carousel">
            {
              this.renderCarousel(this.state.pattern.slides)
            }
          </div>
          <div className="next-prev-arrows">
            <NextPrevPattern direction="previous" pattern={prevPattern} />
            <NextPrevPattern direction="next"  pattern={nextPattern} />
          </div>
        </div>
      </BasePage>
    );
  }
}

export default PatternPage;
