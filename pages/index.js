import React from 'react';
import Carousel from "nuka-carousel";
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import Helmet from 'react-helmet';
import { config } from 'config';

import carli from "../assets/images/carli.jpg";
import maren from "../assets/images/maren.jpg";
import susanne from "../assets/images/susanne.jpg";

import grid from "../assets/images/grid.jpg";
import persianStarLine from "../assets/images/persian-star-2-line.jpg";
import persianStarColor from "../assets/images/persian-star-2-color.jpg";
import persianStarFinished from "../assets/images/persian-star-2-finished.jpg";

import greenBlossomShower from "../assets/images/green-blossom-shower.jpg";
import greenBlossomBathroom from "../assets/images/green-blossom-bathroom.jpg";
import whiteBlossomShower from "../assets/images/white-blossom-shower.jpg";
import kitchenSink from "../assets/images/kitchen-sink.jpg";
import blackStoveTop from "../assets/images/black-stove-top.jpg";
import dragonFlySink from "../assets/images/dragon-fly-sink.jpg";
import homerCafe from "../assets/images/homer-cafe.jpg";
import beachStyle from "../assets/images/beach-style-staircase.jpg";
import prado from "../assets/images/prado.jpg";
import laPecoraBianca from "../assets/images/La-Pecora-Bianca.jpg";

export default class Index extends React.Component {
  render () {
    return (
      <div className="home">
        <div className="header">
          <h1 className="headline">Kibak Tile</h1>
          <a className="header-contact" href="mailto:sales@kibaktile.com">Contact</a>
        </div>

        <section className="tile-bar">
          <img className="tile-bar-img" src={grid} alt="grid" />
          <img className="tile-bar-img" src={persianStarLine} alt="grid" />
          <img className="tile-bar-img" src={persianStarColor} alt="grid" />
          <img className="tile-bar-img" src={persianStarFinished} alt="grid" />
        </section>

        <section  className="text-main">

          <h2 className="home-top-text">
            Designing, hand painting, and firing ceramic tiles of rare quality and excellence since 1981.
          </h2>

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
          <Carousel className="carousel" slidesToShow={3} slidesToScroll={1} wrapAround={true} cellSpacing={20}>
            <img className="tiles-main-img" src={beachStyle} alt="Beach Style" />
            <img className="tiles-main-img" src={laPecoraBianca} alt="La Pecora Bianca" />
            <img className="tiles-main-img" src={prado} alt="Prado" />
            <img className="tiles-main-img" src={homerCafe} alt="Homer Cafe" />
            <img className="tiles-main-img" src={greenBlossomShower} alt="Green Blossom Shower" />
            <img className="tiles-main-img" src={kitchenSink} alt="Kitchen Sink" />
            <img className="tiles-main-img" src={whiteBlossomShower} alt="White Blossom Shower" />
            <img className="tiles-main-img" src={dragonFlySink} alt="Dragon Fly Sink" />
            <img className="tiles-main-img" src={blackStoveTop} alt="Stove Top" />
          </Carousel>
        </section>

      </div>
    )
  }
}
