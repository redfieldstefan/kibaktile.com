import React from "react";
import { Link } from "react-router";
import classnames from "classnames";
import Helmet from 'react-helmet';

const defaultTitle= "Kibak Tile";
const defaultDescription = "Designing, hand painting, and firing ceramic tiles of rare quality and excellence since 1981";

const BasePage = ({children, className, title}) => (
  <div className={classnames(className, "BasePage")}>
    <Helmet
      title={title || defaultTitle}
      meta={[
        { name: "description", content: defaultDescription },
      ]}
      link={[{href: "https://fonts.googleapis.com/css?family=Work+Sans"}]}
    />

    <div className="header">
      <Link to="/">
      <h1 className="headline">Kibak Tile</h1>
      </Link>
      <span className="header-links">
        <a className="header-link" href="mailto:sales@kibaktile.com">Contact</a>
        <a className="header-link" href="/catalog/">Catalog</a>
      </span>
    </div>

    <div className="base-body">
      {children}
    </div>
  </div>
);

export default BasePage;
