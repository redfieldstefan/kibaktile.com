import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import Helmet from 'react-helmet';
import { config } from 'config';
import capstanBacksplash from "../assets/images/Capstan-8x8-backsplash.jpg";
import percevalFloor from "../assets/images/Perceval-8x8-floor.jpg";
import seresGrand from "../assets/images/Seres-2-Grand.jpg";
import interlacedLeaves from "../assets/images/Interlaced-Leaves1.jpg";
import camelot from "../assets/images/Camelot2.jpg";

export default class Index extends React.Component {
  render () {
    return (
      <div className="home">
        <h1 className="header">Kibak Tile</h1>

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

          <ul className="core-list strong">
            <li>We are passionate about listening</li>
            <li>We bring over forty years of knowledge and competence to each project</li>
            <li>Collaboration and teamwork drive our creative innovation</li>
            <li>Obsessively chase the perfect color palette</li>
          </ul>

          <p>
            2017 has brought new changes at <span className="kibak-tile">Kibak Tile</span>.  Susanne’s daughter has joined the team. With a love of tile deeply imprinted since childhood, Carli’s command and skill level in both product development and outreach injects a fresh and welcome viewpoint and enthusiasm.
          </p>

          <p>
            Also joining team <span className="kibak-tile">Kibak</span> this year is talented young designer, Mari Burck.  Mari brings a modern, Nordic sensibility to her original tile designs. Mari’s visionary scope and flawless creative instincts  make her a natural fit at <span className="kibak-tile">Kibak Tile</span>.
          </p>
        </section>

        <section className="tiles-main">
          <img className="tiles-main-img" src={capstanBacksplash} alt="Capstan 8 by 8 Backsplash Pattern" />
          <img className="tiles-main-img" src={percevalFloor} alt="Perceval 8 by 8 Floor Pattern" />
        </section>

      </div>
    )
  }
}
