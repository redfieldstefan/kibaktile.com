import React from "react";
import classnames from "classnames";
import Helmet from 'react-helmet';
import Nav from "./nav";
import Footer from "./Footer";
import '../assets/scss/style.scss';
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.css";


const defaultTitle= "Kibak Tile";
const defaultDescription = "Designing, hand painting, and firing ceramic tiles of rare quality and excellence since 1981";

const BasePage = ({children, className, description, title}) => (
  <div className={classnames(className, "BasePage")}>
    <Helmet
      title={title || defaultTitle}
      meta={[
        { name: "description", content: description ? description : defaultDescription },
      ]}
      link={[{href: "https://fonts.googleapis.com/css?family=Work+Sans"}]}
    />

    <Nav />

    <div className="base-body">
      {children}
    </div>

    <Footer />
  </div>
);

export default BasePage;
