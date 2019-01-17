import React, { Component } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import classnames from "classnames";

class Color extends Component {

  static defaultProps = {
    name: ""
  }

  render() {
    const { color } = this.props;

    return (
      <div className="Color" id={color.name}>
        <img alt={color.name} src={color.swatch}/>
        <p className="color-name">{color.name}</p>
      </div>
    );
  }
};

export default Color;
