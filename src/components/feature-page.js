import React from "react";
import classnames from "classnames";
import styled from 'styled-components';
import catalog from '../utils/catalog';
import Link from "./link";
import BasePage from "./base-page";
import Carousel from "./carousel";
import Contact from "./contact";
import NavigatePatterns from "./navigate-patterns";

const Hero = styled.div`
  display: flex;
  height: 400px;
  flex-direction: column;
  background: no-repeat center;
  background-size: cover;
  background-image: url("/cherry-background-mobile.jpg");

  // TODO make these backgrounds props

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    background-image: url("/cherry-background-tablet.jpg");
  }

  @media(min-width: ${props => props.theme.breakpoints.laptop}) {
    background-image: url("/cherry-background.jpg");
  }
`;

const BreadCrumbs = styled.div`
  color: #ffa07a;
  padding: ${props => props.theme.padding.default} ${props => props.theme.padding.mobile} 0;

  @media(min-width: ${props => props.theme.breakpoints.laptop}) {
    padding: ${props => props.theme.padding.default} ${props => props.theme.padding.default} 0;
  }
`;

const Divider = styled.span`
  color: white;
  padding: 0 5px;
`;

const VerticalCenter = styled.span`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: -50px;

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    justify-content: start;
  }
`;

const HeaderContainer = styled.div`
  background: ${props => props.theme.colors.black};
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em;
  margin: 0 1.5em;
  width: 100%;
  min-width: 212px;

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 1em 2em;
    margin: 0 0 0 4em;
    width: 300px;
  }
`;

const Header = styled.h1`
  font-weight: 300;
  width: 100px;
  font-size: 2.5em;

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 210px;
  }
`;

const FeaturePageLinks = styled.span`
  padding-top: 1em;
`;

const FeaturePageLink = styled(Link)`
  padding-right: 7px;
`;

const Description = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 2em ${props => props.theme.padding.mobile};

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    flex-flow: row;
    padding: 5em 0;
  }

`;

const Text = styled.p `
  font-weight: 300;
  line-height: 1.5;
  max-width: 500px;
  text-align: justify;

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 0 4em;
  }

  @media(min-width: ${props => props.theme.breakpoints.laptop}) {
    padding: 0 4em 0 0;
  }
`
const Features = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: column;
  margin-top: 2em;

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 35%;
    margin-top: 0;
  }
`;

const Feature = styled.li`
  font-size: 1em;
  padding-bottom: 7.5px;

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    padding-left: 5%;
  }
`

const CarouselImageContainer = styled.span`
  width: inherit;
`;

const CarouselImage = styled.img`
  max-height: 500px;

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    width: auto!important;
  }
`;

const Process = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 4em;
`;

const FeaturePage = ({pattern, children, className}) => {
  const {
    background,
    description,
    features,
    installs,
    lineDrawing,
    name,
    steps,
    url
  } = pattern;

  const patternIndex = catalog.indexOf(pattern);
  const lastIndex = catalog.length - 1;
  const prevPattern = patternIndex === 0 ? catalog[lastIndex] : catalog[patternIndex - 1];
  const nextPattern = patternIndex === lastIndex ? catalog[0] : catalog[patternIndex + 1];

  return (
    <BasePage 
      title={`${name} | Kibak Tile`}
      description={description} 
      className={classnames(className, "FeaturePage")}
    >
      <Hero>
        <BreadCrumbs>
          <Link href="/catalog/">
            Patterns
          </Link>
          <Divider>/</Divider>
          <Link href={url}>
            {name}
          </Link>
        </BreadCrumbs>
        <VerticalCenter>
          <HeaderContainer>
            <Header>{name}</Header>
            <FeaturePageLinks>
              <FeaturePageLink href="#installations">
                Installations
              </FeaturePageLink>
              <FeaturePageLink href="#process">
                Process
              </FeaturePageLink>
              <FeaturePageLink href="#contact">
                Contact
              </FeaturePageLink>
            </FeaturePageLinks>
          </HeaderContainer>
        </VerticalCenter>
      </Hero>
      <Description>
        <Text>{description}</Text>
        <Features>
          {
            features &&
            features.map((step, i) => <Feature key={i}>{step}</Feature>)
          }
        </Features>
      </Description>
      <div id="installations">
        <Carousel emulateTouch showStatus={false} infiniteLoop useKeyboardArrows>
          {installs.map((image) => {
            return (
              <CarouselImageContainer>
                <CarouselImage src={image} />
              </CarouselImageContainer>
            );
          })}
        </Carousel>
      </div>
      <Process id="process">
        {children}
      </Process>
      <Contact />
      <NavigatePatterns next={nextPattern} previous={prevPattern} />
    </BasePage>
  );
};

export default FeaturePage;
