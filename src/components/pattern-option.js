import React, { Component } from "react";
import Price from "./price";
import {calculateCost} from "../helpers/price-groups";

const PatternOption = ({pattern}) => (
  <a href={pattern.url} className="PatternOption">
    <img className="pattern-option-line-drawing" src={pattern.painted || pattern.lineDrawing} />
    <div className="pattern-option-details">
      <span className="pattern-option-name">
        {pattern.name}
      </span>
    </div>
  </a>
);

export default PatternOption;
