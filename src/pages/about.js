import React, {PureComponent} from 'react';
import BasePage from '../components/base-page';

import carli from "../assets/images/carli.jpg";
import maren from "../assets/images/maren.jpg";
import susanne from "../assets/images/susanne.jpg";

const About = () => (
  <BasePage title="About Us | Kibak Tile">
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
          2017 brought new changes at <span className="kibak-tile">Kibak Tile</span>.
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
          Also joining team <span className="kibak-tile">Kibak</span> is talented
          young designer, Mari Burck.  Mari brings a modern, Nordic sensibility to her original
          tile designs. Mari’s visionary scope and flawless creative instincts  make her a
          natural fit at <span className="kibak-tile">Kibak Tile</span>.
        </p>
      </section>
    </section>
  </BasePage>
);

export default About;
