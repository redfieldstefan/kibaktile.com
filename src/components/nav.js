import React from "react";
import { Link } from "gatsby";

const Nav = () => (
  <div className="header">
    <Link className="headline-link" to="/">
      <h1 className="headline">Kibak Tile</h1>
    </Link>
    <span className="header-links">
      <a className="header-link" href="/catalog/">Catalog</a>
      <a className="header-link" href="/catalog/sakura-cherry-tree/">Sakura</a>
      <a className="header-link" href="/colors">Colors</a>
      <a className="header-link" href="/about/">About Us</a>
      <a className="header-link" href="/#contact">Contact</a>
    </span>
  </div>
);

export default Nav;
