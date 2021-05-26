import React from 'react';
import styled from 'styled-components';
import BasePage from '../components/base-page';
import HomeHero from "../components/home-hero";
import Contact from "../components/contact";
import Image from "../components/image";
import Link from "../components/link";
import { pickRandomPattern } from '../utils/catalog';

const MissionStatement = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1em;
  padding: 40px ${props => props.theme.padding.mobile};
  text-align: left;

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 1.15em;
    padding: 60px ${props => props.theme.padding.default};
    text-align: justify;
  }
`;

const Paragraph = styled.p`
    line-height: 1.5;
    font-weight: 300;
    margin-bottom: 1.5em;
    max-width: 600px;
`;

const Bar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: whiteSmoke;

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

const CustomImageContainer = styled.span`
  width: calc(100%);
  background: no-repeat url(${props => props.src});
  background-size: cover;
  height: 400px;

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    width: calc(50%);
  }

  @media(min-width: ${props => props.theme.breakpoints.laptop}) {
    width: calc(100%/3);
  }
`

const StyledImage = styled(Image)`
  width: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
  display: block;
  padding-top: 10px;
  font-weight: 400;
`;

const CustomParagraph = styled(Paragraph)`
  padding: 30px 40px;
  flex: 1;
  align-self: center;
  font-size: 1.2em;
  margin-bottom: 0;

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 40px 60px;
    font-size: 1.3em;
  }
`;

const SakuraCustomParagraph = styled(CustomParagraph)`
  order: 2;

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    order: unset;
  }
`;

const SakuraImageContainer = styled(CustomImageContainer)`
  width: calc(100%);
  order: 1;

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    width: calc(50%);
    order: unset;
  }

  @media(min-width: ${props => props.theme.breakpoints.laptop}) {
    width: calc(75%);
  }
`

const Home = ({initialPattern}) => {
  return (
    <BasePage>
      <HomeHero initialPattern={initialPattern}/>
      <MissionStatement>
        <Paragraph>
          Kibak Tile is the only company that has been designing and producing dry-line
          hand-painted tile, specializing in custom coloring and designing, for customers
          worldwide since 1981. We are an all female company; a lady gang of mothers, daughters,
          sisters, and grandmothers. Over our 40+ years in the business, our clients have ranged
          from satisfied homeowners to some of the most elite, architectural and design firms in
          the USA and abroad.
        </Paragraph>
        <Paragraph>
          Our vision is to bring handcrafted excellence, artistry and beauty  to the world of
          ceramic tile one piece at a time. Tile is timeless - let’s make history together.
        </Paragraph>

        <p className="contact-us">
          Contact us via email at <a href="mailto:info@kibaktile.com">info@kibaktile.com</a>
        </p>
      </MissionStatement>
      <Bar>
        <CustomImageContainer src="/Perceval-8x8-floor.jpg" role="img" aria-label="custom designed floor" />
        <CustomParagraph>
          Designing a new home or looking for a custom design to integrate into your commercial project? We will 
          work with you to draft an installation perfect to fit your plan. With custom design, colors, and configuration
          you will be able to create a truly unique and elevated space.
          <StyledLink href='/custom'>Get started with custom</StyledLink>
        </CustomParagraph>
      </Bar>
      <Contact />
      <Bar>
        <SakuraCustomParagraph>
          Sakura. Elegant and timeless, work with us to create the perfect layout for your space. <br/> 
          <StyledLink href='/catalog/sakura-cherry-tree'>Learn more about Sakura</StyledLink>
        </SakuraCustomParagraph>
        <SakuraImageContainer src="/homepage-cherry-background.jpg" role="img" aria-label="sakura cherry sink backsplash" />
      </Bar>
    </BasePage>
  );
};

Home.getInitialProps = () => {
  const initialPattern = pickRandomPattern();

  return {
    initialPattern
  }
};

export default Home;
