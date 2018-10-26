import React, { Component } from "react";
import Price from "./price";

class PatternOption extends Component {

  constructor(props) {
    super(props);

    this.selectPattern = this.selectPattern.bind(this);
  }

  selectPattern() {
    return this.props.onClick(this.props.pattern);
  }

  render() {
    return (
      <a href={this.props.pattern.url} className="PatternOption" onClick={this.selectPattern}>
        <img className="pattern-option-line-drawing" src={this.props.pattern.painted || this.props.pattern.lineDrawing} />
        <span className="pattern-option-name">
          {this.props.pattern.name}
        </span>
        {
          pattern.dimensions.map((dimension) => <Price dimension={dimension} group={pattern.priceGroup} />)
        }
      </a>
    );
  }
};

export default PatternOption;
