import BasePage from "./base-page";
import classnames from "classnames";
import { Carousel } from 'react-responsive-carousel';
import React, { Component } from "react";
import Contact from "./contact";

export default class FeaturePage extends Component {
  render() {

    const {
      background,
      description,
      features,
      installs,
      lineDrawing,
      name,
      steps,
      url
    } = this.props.pattern;

    return (
      <BasePage 
        title={`${name} | Kibak Tile`}
        description={description} 
        className={classnames(this.props.className, "FeaturePage")}
      >
        <div className="feature-page-hero">
          <div className="pattern-breadcrumb">
            <a href="/catalog/">Patterns</a>
            <span className="divider">/</span>
            <a href={url}>{name}</a>
          </div>
          <span className="vertical-center">
            <div className="header-container">
              <h1>{name}</h1>
              <div className="feature-page-links">
                <a href="#installations">Installations</a>
                <a href="#process">Process</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </span>
        </div>
        <div className="feature-page-description">
          <p className="feature-page-paragraph">{description}</p>
          <ul>
            {
              features &&
              features.map((step, i) => <li key={i}>{step}</li>)
            }
          </ul>
        </div>
        <div id="installations" className="feature-pattern-carousel feature-section">
          <Carousel emulateTouch showStatus={false} infiniteLoop useKeyboardArrows>
            { installs.map((image) => {
              return (
                <div className="carousel-img-container">
                  <img src={image} />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div id="process" className="feature-page-process feature-section">
          {this.props.children}
        </div>
        <Contact className="feature-page-contact feature-section" />
      </BasePage>
    );
  }
};
