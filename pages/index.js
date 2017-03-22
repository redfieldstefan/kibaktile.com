import React from 'react';
import Carousel from "nuka-carousel";
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import Helmet from 'react-helmet';
import { config } from 'config';

import seresGrand from "../assets/images/Seres-2-Grand.jpg";
import interlacedLeaves from "../assets/images/Interlaced-Leaves1.jpg";
import camelot from "../assets/images/Camelot2.jpg";
import greenBlossomShower from "../assets/images/green-blossom-shower.jpg";
import greenBlossomBathroom from "../assets/images/green-blossom-bathroom.jpg";
import whiteBlossomShower from "../assets/images/white-blossom-shower.jpg";
import kitchenSink from "../assets/images/kitchen-sink.jpg";
import blackStoveTop from "../assets/images/black-stove-top.jpg";
import dragonFlySink from "../assets/images/dragon-fly-sink.jpg";
import homerCafe from "../assets/images/homer-cafe.jpg";
import beachStyle from "../assets/images/beach-style-staircase.jpg";
import prado from "../assets/images/prado.jpg";

export default class Index extends React.Component {
  render () {
    return (
      <div className="home">
        <div className="header">
          <h1 className="headline">Kibak Tile</h1>
          <a className="header-contact" href="mailto:sales@kibaktile.com">Contact</a>
        </div>

        <section className="tile-bar">
          <img className="tile-bar-img" src={seresGrand} />
          <img className="tile-bar-img" src={interlacedLeaves} />
          <img className="tile-bar-img" src={camelot} />
        </section>

        <section  className="text-main">

          <h3>
            Designing, hand painting, and firing ceramic tiles of rare quality and excellence since 1981.
          </h3>

          <p>
            For decades the <span className="kibak-tile">Kibak Tile</span> line was sold exclusively through Ann Sacks where we earned a reputation of
            product mastery, swift delivery, as well as of genuinely interested team players and collaborators.
          </p>

          <p>
            Joining forces with Fireclay Tile in 2014, the infusion of the <span className="kibak-tile">Kibak</span> point of view and designs brought a fresh perspective to Fireclay Tile and was an instrumental force in their new look and brand aesthetic.
          </p>

          <p>
            2017 has brought new changes at <span className="kibak-tile">Kibak Tile</span>.  Susanne’s daughter has joined the team. With a love of tile deeply imprinted since childhood, Carli’s command and skill level in both product development and outreach injects a fresh and welcome viewpoint and enthusiasm.
          </p>

          <p>
            Also joining team <span className="kibak-tile">Kibak</span> this year is talented young designer, Mari Burck.  Mari brings a modern, Nordic sensibility to her original tile designs. Mari’s visionary scope and flawless creative instincts  make her a natural fit at <span className="kibak-tile">Kibak Tile</span>.
          </p>

          <ul className="core-list strong">
            <li>We are passionate about listening</li>
            <li>We bring over forty years of knowledge and competence to each project</li>
            <li>Collaboration and teamwork drive our creative innovation</li>
            <li>Obsessively chase the perfect color palette</li>
          </ul>

          <p>
            If you are interested in learning more please contact us via email at <a href="mailto:sales@kibaktile.com">sales@studioredfield.com</a>
          </p>

        </section>

        <section className="tiles-main">
          <Carousel className="carousel" slidesToShow={3} slidesToScroll={1} wrapAround={true} cellSpacing={20}>
            <img className="tiles-main-img" src={beachStyle} alt="Beach Style" />
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
