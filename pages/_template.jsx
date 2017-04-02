import React from 'react';
import Helmet from 'react-helmet'
import '../assets/postcss/style';

const title= "Kibak Tile";
const description = "Designing, hand painting, and firing ceramic tiles of rare quality and excellence since 1981";

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
            link={[{href: "https://fonts.googleapis.com/css?family=Work+Sans"}]}
          />
            {this.props.children}
        </main>
    )
  },
})
