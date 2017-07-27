import React, { Component } from "react";
import { Link } from 'react-router';
import catalog from "../data/catalog";

const pdfUrl = "https://s3-us-west-2.amazonaws.com/studio-redfield/2015+Kibak+Tile+catalog.pdf";

const generateTiles = (pattern) => {
  const tilesForReturn = [];
  for(var i = 0; i <= 29; i++) {
    tilesForReturn.push(pattern.lineDrawing);
  }
  return tilesForReturn;
};

export default class HomeHero extends Component {

  constructor(props) {
    super(props);
    const pattern = catalog[Math.floor(Math.random()*catalog.length)];

    this.state = {
      pattern
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <div className="HomeHero">
          <div className="HomeHero-background">
            {
              generateTiles(this.state.pattern).map((tile, i) => {
                return (
                  <span key={i} className={`HomeHero-tile ${this.state.pattern.rotationClass}`}>
                    <img src={tile} />
                  </span>
                )
              })
            }
          </div>
          <div className="HomeHero-text">
            <h1>Kibak Tile</h1>
            <h2>Design, make, bake, repeat. Hand-painted ceramic tile made in Oregon since 1981.</h2>
          </div>
        </div>
        <div className="pattern-cta">
          <p>
            You are looking at our <Link className="random-pattern-link" to={this.state.pattern.url}>
              {this.state.pattern.name}
            </Link> pattern. View more of our <Link to="/catalog/">Catalog</Link> online or
            download the <a href={pdfUrl}>full PDF</a>
          </p>
        </div>
      </div>
    );
  }
};
