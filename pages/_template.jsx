import React from 'react';
import Helmet from 'react-helmet'
import '../assets/postcss/style';

const title= "Kibak Tile";
const description = "Kibak Tile Fine Design";

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
        <main>
          <Helmet
            title={title}
            meta={[
              { name: "description", content: description },
            ]}
          />
            {this.props.children}
        </main>
    )
  },
})
