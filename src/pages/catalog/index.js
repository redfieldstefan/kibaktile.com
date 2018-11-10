import React, { Component } from "react";
import BasePage from "../../components/base-page";
import PatternOption from "../../components/pattern-option";
import downloadIcon from "../../assets/images/icons/download.png";
import catalog from "../../data/catalog";

const pdfUrl = "https://s3-us-west-2.amazonaws.com/studio-redfield/2018+Kibak+Tile+catalog.pdf";

const Catalog = () => (
  <BasePage className="Catalog" title="Kibak Tile | Catalog">
    <div className="download-catalog-bar">
      <p>
        Browse a selection of our patterns online or
        <a className="download-link color-dark-mint" href={pdfUrl}>
          Download Full Catalog PDF
        </a>
      </p>
    </div>
    <div className="catalog-options">
      {
        catalog.map((pattern, i) => (
          <PatternOption pattern={pattern} key={i} />
        ))
      }
    </div>
  </BasePage>
);


export default Catalog;
