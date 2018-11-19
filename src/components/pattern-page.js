import React, { Component } from "react";
import BasePage from "./base-page";
import { Carousel } from 'react-responsive-carousel';
import Helmet from 'react-helmet';
import NextPrevPattern from "./next-prev-pattern";
import catalog from "../data/catalog";
import Price from "./price";
import Modal from "./Modal";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
import Form from "./Form";
import {calculateCost} from "../helpers/price-groups";

const defaultDescription = `Infuse your space with beautiful pattern and color using decorative
  ceramic tile. There are many different ways to feature decorative tile in any project. Use
  decorative tile over a large area to achieve an all-over pattern effect. Or drop-in single
  decorative tiles into solid colored field tile to give a pop of color to your installation.
  Border tiles in 3x6 or 4x8 size are also available to pair with the larger decorative tiles. Each
  tile is hand-painted with ceramic glaze and kiln fired to create a beautiful and durable final
  product. Suitable for interior wall, countertop and low-traffic floors. Exterior use in
  non-freezing climates only. Tile dimensions are 6" x 6" and 8" x 8".`;

class PatternPage extends Component {

  state = {
    pattern: this.props.pattern,
    modalOpen: false,
    contact: {
      name: "",
      email: "",
      address: "",
      state: "",
      zip: "",
      phone: "",
      comment: ""
    }
  }

  handleChange = (e) => {
    e.preventDefault();

    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }

  renderCarousel(slides) {
    return (
      <Carousel emulateTouch showStatus={false} infiniteLoop useKeyboardArrows>
        { slides.map((image) => {
          return (
            <div className="carousel-img-container">
              <img src={image} />
            </div>
          );
        })}
      </Carousel>
    )
  }
  
  renderContact() {
    return(
      <div className="pattern-contact">
        <Form>
          <TextInput placeholder="Name" className="pattern-contact-name" name="name" value={this.state.name} onChange={this.handleChange} />
          <TextInput placeholder="Email" className="pattern-contact-email" name="email" value={this.state.email} onChange={this.handleChange}/>
          <TextInput placeholder="Address" name="address" value={this.state.address} onChange={this.handleChange}/>
          <TextInput placeholder="State" className="pattern-contact-state" name="state" value={this.state.state} onChange={this.handleChange}/>
          <TextInput placeholder="Zip" className="pattern-contact-zip" name="zip" value={this.state.zip} onChange={this.handleChange}/>
          <TextInput type="tel" placeholder="Phone" className="pattern-contact-phone" name="phone" value={this.state.phone} onChange={this.handleChange}/>
          <div className="pattern-contact-select">
            <label for="pattern-select">I'd like to know more about</label>
            <select id="pattern-select" name="pattern">
              <option value="">Select a pattern</option>
              {catalog.map(pattern => {
                return (<option key={pattern.name} value={pattern.name} selected={pattern === this.props.pattern}>{pattern.name}</option>)
              })}
            </select>
          </div>
          <TextArea placeholder="Message" className="pattern-contact-body" name="comment" value={this.state.comment} onChange={this.handleChange} />
        </Form>
      </div>
    );
  }

  toggleContactModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  };

  closeModal = () => {
    this.setState({
      modalOpen: false
    })
  }


  render() {
    const { pattern } = this.state;
    const patternIndex = catalog.indexOf(pattern);
    const lastIndex = catalog.length - 1;
    const prevPattern = patternIndex === 0 ? catalog[lastIndex] : catalog[patternIndex - 1];
    const nextPattern = patternIndex === lastIndex ? catalog[0] : catalog[patternIndex + 1];
    const baseUrl = `http://www.kibaktile.com${pattern.url}`;

    return(
      <BasePage
        title={`${pattern.name} | Kibak Tile`}
        description={pattern.description}
      >
        <Helmet
          meta={[
            { property: "og:image", content: pattern.painted },
            { name: "twitter:card", content: "summary"},
            { name: "twitter:title", content: pattern.name },
            { name: "twitter:description", content: pattern.description },
            { name: "twitter:url", content: baseUrl },
            { name: "twitter:image", content: pattern.painted }
          ]}
        >
          <link rel="icon" type="image/png" href={`${pattern.painted}?t=${Date.now()}`} sizes="16x16" />
        </Helmet>
        <div className="PatternPage">
          <div className="pattern-breadcrumb">
            <a href="/catalog/">Catalog</a>
            <span className="divider">/</span>
            <a href={pattern.url}>{pattern.name}</a>
          </div>
          <div className="pattern-carousel">
            {this.renderCarousel(pattern.slides)}
          </div>
          <div className="pattern-text">
            <span className="pattern-title-container">
              <h1 className="pattern-title">{pattern.name}</h1>
            </span>
            <span className="pattern-description">
              <p>
                {
                  pattern.description ? pattern.description :
                  defaultDescription
                }
              </p>
              <p>
                Suitable for interior wall, countertop and low-traffic floors. Exterior use in
                non-freezing climates only. Tile dimensions are 6" x 6" and 8" x 8".
              </p>
              {
                pattern.dimensions && pattern.dimensions.map(dimension => (
                  <Price key={`${pattern.name}-${dimension}`} cost={calculateCost(pattern.priceGroup, dimension)} dimension={dimension} />)
                ) 
              }
              <div className="pattern-share-conatiner">
                <span className="pattern-share-label">Share on</span>
                <a
                  className="pattern-share-link"
                  target="_blank"
                  href={`http://www.facebook.com/share.php?u=${baseUrl}`}
                >
                  Facebook
                </a>
                <a
                  className="pattern-share-link"
                  target="_blank"
                  href={`http://twitter.com/intent/tweet?text=${pattern.name}+${baseUrl}`}
                >
                  Twitter
                </a>
              </div>
              <div className="pattern-get-started">
                Want to order or have a question?&nbsp;
                <button className='fake-link' onClick={this.toggleContactModal}>Lets get started!</button>
              </div>
              <Modal isOpen={this.state.modalOpen} handleClose={this.toggleContactModal} onRequestClose={this.closeModal}>
                {this.renderContact()}
              </Modal>
            </span>
          </div>
          <div className="next-prev-arrows">
            <NextPrevPattern direction="previous" pattern={prevPattern} />
            <NextPrevPattern direction="next"  pattern={nextPattern} />
          </div>
        </div>
      </BasePage>
    );
  }
}

export default PatternPage;
