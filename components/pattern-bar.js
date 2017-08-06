import { Link } from 'react-router';
import React from "react";

const generateTiles = (tile) => {
  const tilesForReturn = [];
  for(var i = 0; i <= 2; i++) {
    tilesForReturn.push(tile);
  }
  return tilesForReturn;
};

const patternBarText = (pattern, alignment) => (
  <span className={`pattern-bar-tile line-drawing`}>
    <img src={pattern.fourPiece} alt={pattern.name} />
    <span className={`pattern-bar-text ${alignment}`}>
      <span className="pattern-bar-text-body">
        <span>This is</span>
        <span className="pattern-bar-headline">
          { pattern.name }
        </span>
        <Link className="color-seagreen" to={pattern.url}>View more configurations</Link>
      </span>
    </span>
  </span>
);

export default ({backgroundColor, pattern, alignment}) => (
  <div className={`PatternBar ${alignment} background-${backgroundColor}`}>
    {
      (alignment !== "right") &&
      patternBarText(pattern, alignment)
    }
    {
      generateTiles(pattern.painted).map((tile, i) => (
        <span key={i} className="pattern-bar-tile">
          <img src={tile} alt={`${pattern.name} individual`}/>
        </span>
      ))
    }
    {
      (alignment === "right") &&
      patternBarText(pattern, alignment)
    }
  </div>
);
