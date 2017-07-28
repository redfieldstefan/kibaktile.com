import React from "react";

const generateTiles = (tile) => {
  const tilesForReturn = [];
  for(var i = 0; i <= 4; i++) {
    tilesForReturn.push(tile);
  }
  return tilesForReturn;
};

export default ({pattern}) => (
  <div className="PatternBar">
    {
      generateTiles(pattern.painted).map((tile, i) => (
        <span key={i} className="pattern-bar-tile">
          <img src={tile} />
        </span>
      ))
    }
  </div>
);
