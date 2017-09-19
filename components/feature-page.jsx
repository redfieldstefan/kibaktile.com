import BasePage from "./base-page";
import { Carousel } from 'react-responsive-carousel';
import React, { Component } from "react";

export default class FeaturePage extends Component {
  render() {
    const { background, description, features, installs, name, steps, url } = this.props.pattern;

    return (
      <BasePage className="FeaturePage">
        <div className="feature-page-hero" style={{backgroundImage: `url(${background})`}}>
          <div className="pattern-breadcrumb">
            <a href="/catalog/">Patterns</a>
            <span className="divider">/</span>
            <a href={url}>{name}</a>
          </div>
          <span className="vertical-center">
            <div className="header-container">
              <h1 className="">{name}</h1>
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
        <div id="installations" className="feature-pattern-carousel">
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
        <div id="process" className="feature-page-process">
          <h2>Process</h2>
          <ul>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
            {
              steps &&
              steps.map((step, i) => <li key={i}>{step}</li> )
            }
          </ul>
        </div>
        <div id="contact" className="feature-page-contact">
          <form action="https://formspree.io/redfield.stefan@gmail.com" method="post" enctype="text/plain">
            <span className="name">
              <input type="text" placeholder="Name" name="name" />
            </span>
            <span className="email">
              <input type="text" placeholder="Email" name="mail" />
            </span>
            <input className="body" type="text" name="comment" size="50" />
            <button className="submit" type="submit" value="Send">Send</button>
          </form>
        </div>
      </BasePage>
    );
  }
};
