import React, { Component } from "react";

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
        <img className="pattern-option-line-drawing" src={this.props.pattern.lineDrawing} />
        <span className="pattern-option-name">
          {this.props.pattern.name}
        </span>
      </a>
    );
  }
};

export default PatternOption;