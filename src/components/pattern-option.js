import React, { Component } from "react";
import Price from "./price";
import priceGroups, {findPricePerFoot} from "../helpers/price-groups";

class PatternOption extends Component {

  constructor(props) {
    super(props);

    this.selectPattern = this.selectPattern.bind(this);
  }

  selectPattern() {
    return this.props.onClick(this.props.pattern);
  }

  calculateCost = (dimension) => {
    const { priceGroup } = this.props.pattern;

    if(!priceGroup) {
      return;
    }

    const pricePerTile = priceGroups[priceGroup][dimension];
    return findPricePerFoot(pricePerTile, dimension);
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
              pattern.dimensions.map((dimension) => <Price key={`${pattern.name}-${dimension}`} cost={this.calculateCost(dimension)} dimension={dimension} />)
            }
          </div>
        </div>
      </a>
    );
  }
};

export default PatternOption;
