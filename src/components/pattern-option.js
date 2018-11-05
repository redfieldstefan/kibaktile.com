import React, { Component } from "react";
import Price from "./price";
import {calculateCost} from "../helpers/price-groups";

class PatternOption extends Component {

  constructor(props) {
    super(props);

    this.selectPattern = this.selectPattern.bind(this);
  }

  selectPattern() {
    return this.props.onClick(this.props.pattern);
  }

  render() {
    const { pattern } = this.props;

    return (
      <a href={pattern.url} className="PatternOption" onClick={this.selectPattern}>
        <img className="pattern-option-line-drawing" src={pattern.painted || pattern.lineDrawing} />
        <div className="pattern-option-details">
          <span className="pattern-option-name">
            {pattern.name}
          </span>
          <div className="pattern-price-container">
            {
              pattern.dimensions &&
              pattern.priceGroup &&
              pattern.dimensions.map((dimension) => <Price key={`${pattern.name}-${dimension}`} cost={calculateCost(pattern.priceGroup, dimension)} dimension={dimension} />)
            }
          </div>
        </div>
      </a>
    );
  }
};

export default PatternOption;
