import React, {PureComponent} from 'react';
import BasePage from '../components/base-page';
import Carousel from "../components/carousel";
import Helmet from 'react-helmet';
import homeCarousel from "../assets/images/carousels/home";
import PatternBar from "../components/pattern-bar";
import catalog from "../data/catalog";
import { Link } from 'react-router';

//PATTERNS
import angelicSimple from "../data/catalog/angelic-simple";
import hana from "../data/catalog/hana";
import gammon from "../data/catalog/gammon";
import wallflower from "../data/catalog/wallflower";

import carli from "../assets/images/carli.jpg";
import maren from "../assets/images/maren.jpg";
import susanne from "../assets/images/susanne.jpg";

const pdfUrl = "https://s3-us-west-2.amazonaws.com/studio-redfield/2015+Kibak+Tile+catalog.pdf";

const generateTiles = (pattern) => {
  const tilesForReturn = [];
  for(var i = 0; i <= 29; i++) {
    tilesForReturn.push(pattern.lineDrawing);
  }
  return tilesForReturn;
};

export default class Index extends React.PureComponent {

  constructor(props) {
    super(props);
    const pattern = catalog[Math.floor(Math.random()*catalog.length)];

    this.state = {
      pattern
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  render () {
    return (
      <BasePage className="home">

        <div className="HomeHero">
          <div className="HomeHero-background">
            {
              generateTiles(this.state.pattern).map((tile, i) => {
                return (
                  <span key={i} className={`HomeHero-tile ${this.state.pattern.rotationClass}`}>
                    <img src={tile} />
                  </span>
                )
              })
            }
          </div>
          <div className="HomeHero-text-container">
            <div className="HomeHero-text">
              <h1>Kibak Tile</h1>
              <h2>Design, make, bake, repeat. Hand-painted ceramic tile made in Oregon since 1981.</h2>
            </div>
          </div>
        </div>
        <div className="pattern-cta">
          <p>
            You are looking at our <Link className="random-pattern-link" to={this.state.pattern.url}>
              {this.state.pattern.name}
            </Link> pattern. View more of our <Link to="/catalog/">Catalog</Link> online or
            download the <a href={pdfUrl}>full PDF</a>
          </p>
        </div>

        <section  className="text-main">

          <section className="mission-statement">
            <p>
              Kibak Tile is the only company that has been designing and producing dry-line,
              hand-painted tile, specializing in custom coloring and designing  for customers
              worldwide since 1981. We are an all female company; a lady gang of mothers, daughters,
              sisters, and grandmothers. Over our 40+ years in the business, our clients have ranged
              from satisfied homeowners to some of the most elite, architectural and design firms in
              the USA and abroad.
            </p>
            <p>
              Our vision is to bring handcrafted excellence, artistry and beauty  to the world of
              ceramic tile one piece at a time. Tile is timeless - let’s make history together.
            </p>

            <p className="contact-us">
              contact us via email at <a href="mailto:sales@kibaktile.com">sales@studioredfield.com</a>
            </p>
          </section>

          <PatternBar pattern={hana} alignment="left" backgroundColor="dark-blue" />
          <PatternBar pattern={wallflower} alignment="right" backgroundColor="black" />

          <section className="home-bios">
            <section className="home-bio">
              <span className="home-bio-img-container">
                <img src={susanne} className="home-bio-img" />
              </span>
              <p className="home-bio-p">
                For decades the <span className="kibak-tile">Kibak Tile</span> line was sold exclusively through Ann Sacks where we earned a reputation of
                product mastery, swift delivery, as well as of genuinely interested team players and collaborators.

                Joining forces with Fireclay Tile in 2014, the infusion of the <span className="kibak-tile">Kibak</span> point of view and designs brought a fresh perspective to Fireclay Tile and was an instrumental force in their new look and brand aesthetic.
              </p>
            </section>

            <section className="home-bio">
              <span className="home-bio-img-container">
                <img src={carli} className="home-bio-img" />
              </span>
              <p className="home-bio-p">
                2017 has brought new changes at <span className="kibak-tile">Kibak Tile</span>.
                Susanne’s daughter Carli has joined the team. With a love of tile deeply imprinted since
                childhood, Carli’s command and skill level in both product development and outreach
                injects a fresh and welcome viewpoint and enthusiasm.
              </p>
            </section>

            <section className="home-bio">
              <span className="home-bio-img-container">
                <img src={maren} className="home-bio-img" />
              </span>
              <p className="home-bio-p">
                Also joining team <span className="kibak-tile">Kibak</span> this year is talented
                young designer, Mari Burck.  Mari brings a modern, Nordic sensibility to her original
                tile designs. Mari’s visionary scope and flawless creative instincts  make her a
                natural fit at <span className="kibak-tile">Kibak Tile</span>.
              </p>
            </section>
          </section>

        </section>

        <PatternBar pattern={gammon} alignment="right" backgroundColor="dark-brown" />
        <PatternBar pattern={angelicSimple} alignment="left" backgroundColor="light-gray" />

        <section className="tiles-main">
          <Carousel slides={homeCarousel} />
        </section>

      </BasePage>
    )
  }
}
