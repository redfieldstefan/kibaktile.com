import React from 'react';
import '../assets/scss/style';

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <main>
        {this.props.children}
      </main>
    )
  },
})
