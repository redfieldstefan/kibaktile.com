import React, { useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import Helmet from 'react-helmet';
import styled from 'styled-components'
import BasePage from "./base-page";
import NextPrevPattern from "./next-prev-pattern";
import catalog from "../utils/catalog";
import Price from "./price";
import Modal from "./modal";
import Breadcrumbs from "./breadcrumbs";
import FakeLink from './fake-link';
import Contact from "./contact";
import NavigatePatterns from './navigate-patterns';
import { calculateCost } from "../utils/price-groups";

const defaultDescription = `Infuse your space with beautiful pattern and color using decorative
  ceramic tile. There are many different ways to feature decorative tile in any project. Use
  decorative tile over a large area to achieve an all-over pattern effect. Or drop-in single
  decorative tiles into solid colored field tile to give a pop of color to your installation.
  Border tiles in 3x6 or 4x8 size are also available to pair with the larger decorative tiles. Each
  tile is hand-painted with ceramic glaze and kiln fired to create a beautiful and durable final
  product. Suitable for interior wall, countertop and low-traffic floors. Exterior use in
  non-freezing climates only. Tile dimensions are 6" x 6" and 8" x 8".`;

const CarouselContainer = styled.div`
  width: 100%;
  float: left;
  padding: ${props => props.theme.padding.mobile};

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.padding.default};
    width: 50%;
  }

  .carousel .slide img {
    vertical-align: center;
    border: 0;
    width: 50%;
  }

  .carousel-img-container {
    width: 100%;

    @media(min-width: $width-tablet) {
      width: 600px;
    }
  }
`;

const Name = styled.h1`
  letter-spacing: .025em;
  font-weight: 300;
  line-height: 1;
  color: ${props => props.theme.colors.black};
  border-bottom: 2px solid black;
  padding: 10px 0;

  @media(min-width: ${props => props.theme.breakpoints.laptop}) {
    font-size: 2.5em;
    padding: 0 0 10px 0;
  }
`;

const Body = styled.div`
  float: left;
  display: flex;
  flex-direction: column;
  font-weight: 300;
  line-height: 1.5;
  padding: 0 20px;
  width: 100%;

  @media(min-width:  ${props => props.theme.breakpoints.laptop}) {
    padding: 40px;
    width: 40%;
  }
`;

const Description = styled.div`
  font-size: 1.15em;
  padding: 20px 0 0;

  @media(min-width:  ${props => props.theme.breakpoints.laptop}) {
    text-align: justify;
    max-width: 1000px;
    line-height: 1.5;
    font-weight: 300;
    align-self: center;
  }
`;

const PriceContainer = styled.span`
display: block;
  padding-top: 20px;
`;

const Share = styled.div`
  margin-top: 20px;
`;

const ShareLink = styled.a`
  padding-left: 7px;
`;

const GetStarted = styled.div`
  padding-top: 20px;
  font-weight: 400;
`;

const StyledFakeLink = styled(FakeLink)`
  font-size: inherit;
  text-decoration: underline;
  padding: 0;
`;


const PatternPage = ({pattern}) => {
  const [showModal, setShowModal] = useState(false);
  const patternIndex = catalog.indexOf(pattern);
  const lastIndex = catalog.length - 1;
  const prevPattern = patternIndex === 0 ? catalog[lastIndex] : catalog[patternIndex - 1];
  const nextPattern = patternIndex === lastIndex ? catalog[0] : catalog[patternIndex + 1];
  const baseUrl = `http://www.kibaktile.com${pattern.url}`;

  return(
    <BasePage
      title={`${pattern.name} | Kibak Tile`}
      description={pattern.description}
      breadcrumbs={[{href: '/catalog', label: 'Catalog'}, {href: pattern.url, label: pattern.name}]}
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
      
      {
        pattern.slides && (
          <CarouselContainer>
            <Carousel emulateTouch showStatus={false} infiniteLoop useKeyboardArrows>
              { pattern.slides.map((image) => {
                return (
                  <div className="carousel-img-container">
                    <img src={image} />
                  </div>
                );
              })}
            </Carousel>
          </CarouselContainer>
        )
      }

      <Body>
        <Name>{pattern.name}</Name>
        <Description>
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
          <PriceContainer>
            {
              pattern.dimensions && pattern.dimensions.map(dimension => (
                <Price key={`${pattern.name}-${dimension}`} cost={calculateCost(pattern.priceGroup, dimension)} dimension={dimension} />)
              ) 
            }
          </PriceContainer>
          <Share>
            Share on
            <ShareLink
              target="_blank"
              href={`http://www.facebook.com/share.php?u=${baseUrl}`}
            >
              Facebook
            </ShareLink>
            <ShareLink
              target="_blank"
              href={`http://twitter.com/intent/tweet?text=${pattern.name}+${baseUrl}`}
            >
              Twitter
            </ShareLink>
          </Share>
          <GetStarted>
            Want to order or have a question?&nbsp;
            <StyledFakeLink onClick={() => setShowModal(true)}>Get started</StyledFakeLink>
          </GetStarted>
          <Modal isOpen={showModal} onRequestClose={() => setShowModal(false)}>
            <Contact />
          </Modal>
        </Description>
      </Body>
      <NavigatePatterns next={nextPattern} previous={prevPattern} />
    </BasePage>
  );
}

export default PatternPage;
