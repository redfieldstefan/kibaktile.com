import React from "react";
import classnames from "classnames";
import Helmet from 'react-helmet';
import Nav from "./nav";

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
  </div>
);

export default BasePage;
