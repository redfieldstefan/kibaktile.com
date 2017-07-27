import React from 'react';
import BasePage from '../components/base-page';
import Carousel from "../components/carousel";
import Helmet from 'react-helmet';
import homeCarousel from "../assets/images/carousels/home";
import HomeHero from "../components/home-hero";

import carli from "../assets/images/carli.jpg";
import maren from "../assets/images/maren.jpg";
import susanne from "../assets/images/susanne.jpg";

import grid from "../assets/images/grid.jpg";
import persianStarLine from "../assets/images/persian-star-2-line.jpg";
import persianStarColor from "../assets/images/persian-star-2-color.jpg";
import persianStarFinished from "../assets/images/persian-star-2-finished.jpg";

const pdfUrl = "https://s3-us-west-2.amazonaws.com/studio-redfield/2015+Kibak+Tile+catalog.pdf";

export default class Index extends React.Component {
  render () {
    return (
      <BasePage className="home">

        <HomeHero />

        <section  className="text-main">

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

          <ul className="core-list">
            <li className="core-list-li">We are passionate about listening</li>
            <li className="core-list-li">We bring over forty years of knowledge and competence to each project</li>
            <li className="core-list-li">Collaboration and teamwork drive our creative innovation</li>
            <li className="core-list-li">Obsessively chase the perfect color palette</li>
          </ul>

          <p>
            If you are interested in learning more please contact us via email at <a href="mailto:sales@kibaktile.com">sales@studioredfield.com</a>
          </p>

        </section>

        <section className="tiles-main">
          <Carousel slides={homeCarousel} />
        </section>

      </BasePage>
    )
  }
}
