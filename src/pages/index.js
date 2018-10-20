import React, {PureComponent} from 'react';
import BasePage from '../components/base-page';
import Carousel from "../components/carousel";
import Helmet from 'react-helmet';
import PatternBar from "../components/pattern-bar";
import Contact from "../components/contact";
import catalog from "../data/catalog";
import { Link } from 'gatsby';
import refresh from "../assets/images/icons/refresh.png";
import placeholder from "../assets/images/placeholder.jpg";

//PATTERNS
import angelicSimple from "../data/catalog/angelic-simple";
import hana from "../data/catalog/hana";
import gammon from "../data/catalog/gammon";
import wallflower from "../data/catalog/wallflower";

const pdfUrl = "https://s3-us-west-2.amazonaws.com/studio-redfield/2018+Kibak+Tile+catalog.pdf";

export default class Index extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      pattern: {painted: ""}
    }

    this.pickRandomPattern = this.pickRandomPattern.bind(this);
  }

  componentDidMount() {
    const availablePatterns = catalog.filter(pattern => pattern.url !== "/catalog/sakura-cherry-tree/");
    const pattern = availablePatterns[Math.floor(Math.random()*availablePatterns.length)];

    this.setState({
      pattern
    })
  }

  pickRandomPattern(e) {
    e.preventDefault();
    const forThePicking = catalog.filter(pattern => pattern !== this.state.pattern && pattern.url !== "/catalog/sakura-cherry-tree/");
    const randomPattern = forThePicking[Math.floor(Math.random()*forThePicking.length)];

    this.setState({
      pattern: randomPattern
    });
  }

  generateTiles(pattern) {
    const tilesForReturn = [];
    for(var i = 0; i <= 11; i++) {
      tilesForReturn.push(pattern.painted);
    }
    return tilesForReturn;
  }

  renderHomeHero(pattern) {
    return (
      <div className="HomeHero">
        <button className="pick-random-pattern" onClick={this.pickRandomPattern}>
          <img src={refresh} />
        </button>
        <div className="HomeHero-background">
          {
            this.generateTiles(pattern).map((tile, i) => {
              return (
                <span key={i} className={`HomeHero-tile ${pattern.rotationClass}`}>
                  <img src={tile || placeholder} />
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
    )
  }

  render() {
    return (
      <BasePage className="home">

        {this.renderHomeHero(this.state.pattern)}
        {
          this.state.pattern &&          
          <div className="pattern-cta">
            <p>
              You are looking at our <Link className="random-pattern-link" to={this.state.pattern.url}>
                {this.state.pattern.name}
              </Link> pattern. View more of our <Link to="/catalog/">Catalog</Link> online or
              download the <a href={pdfUrl}>full PDF</a>
            </p>
          </div>
        }

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
              Contact us via email at <a href="mailto:info@kibaktile.com">info@kibaktile.com</a>
            </p>
          </section>

          <PatternBar pattern={hana} alignment="left" backgroundColor="dark-blue" />
          <PatternBar pattern={wallflower} alignment="right" backgroundColor="black" />

        </section>

        <Contact />

        <PatternBar pattern={gammon} alignment="right" backgroundColor="dark-brown" />
        <PatternBar pattern={angelicSimple} alignment="left" backgroundColor="light-gray" />

      </BasePage>
    )
  }
}
