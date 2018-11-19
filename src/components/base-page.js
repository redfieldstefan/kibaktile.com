import React, { Component } from "react";
import classnames from "classnames";
import Helmet from 'react-helmet';
import Nav from "./nav";
import Footer from "./Footer";
import '../assets/scss/style.scss';
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.css";

const defaultTitle= "Kibak Tile";
const defaultDescription = "Designing, hand painting, and firing ceramic tiles of rare quality and excellence since 1981";

class BasePage extends Component {
  render() {
    const {children, className, description, title} = this.props;

    return (
      <div className={classnames(className, "BasePage")}>
        <Helmet
          title={title || defaultTitle}
          meta={[
            { name: "description", content: description ? description : defaultDescription },
          ]}
          link={[{href: "https://fonts.googleapis.com/css?family=Work+Sans"}]}
        >
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-56313656-5"></script>
          <script>
            {
              `window.dataLayer = window.dataLayer || []
              function gtag(){dataLayer.push(arguments)}
              gtag('js', new Date())
              gtag('config', 'UA-56313656-5')`
            }
          </script>
        </Helmet>

        <Nav/>

        <div className="base-body">
          {children}
        </div>

        <Footer />
      </div>
    );
  }
};

export default BasePage;
