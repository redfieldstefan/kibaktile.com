import React, { Component } from "react";

const generateTiles = (pattern) => {
  const tilesForReturn = [];
  for(var i = 0; i <= 29; i++) {
    tilesForReturn.push(pattern.lineDrawing);
  }
  return tilesForReturn;
};

export default class HomeHero extends Component {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="HomeHero">
        <div className="HomeHero-background">
          {
            generateTiles(this.props.pattern).map((tile, i) => {
              return (
                <span key={i} className="HomeHero-tile">
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
    );
  }
};
