import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components';
import catalog, { pickRandomPattern } from "../utils/catalog";

const pdfUrl = "https://s3-us-west-2.amazonaws.com/studio-redfield/2018+Kibak+Tile+catalog.pdf";

const HomeHeroContainer = styled.div`
	position: relative;
`;

const HomeHeroBackground = styled.div`
	display: flex;
  flex-flow: row;
  flex-wrap: wrap;
`;

const PickRandomPattern = styled.button`
	background-color: rgba(255,255,255,.5);
  border-radius: 50%;
  border-style: none;
  left: 10px;
  padding: 5px;
  position: absolute;
  top: 15px;
  height: 25px;
  width: 25px;
  z-index: 2;
  -webkit-transition: width .1s, height .1s, -webkit-transform 2s;

  &:active{
    background-color: white;
  }

  &:focus {
    outline: none;
  }

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    left: 25px;
    top: 25px;

    &:hover {
      height: 35px;
      width: 35px;
      cursor: pointer;
    }
  }

  img {
    width: 100%;
  }
`;

const HomeHeroTile = styled.span`
	width: 25%;
  flex-grow: 0;
  display: inherit;

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    width: calc(100%/6);
  }

  img {
    width: 100%;
  }
`;

const HomeHeroTextContainer = styled.div`
  align-items: center;
  -webkit-align-items: center;
  display: flex;
  position: absolute;
  justify-content: center;
  -webkit-justify-content: center;
  top: 0;
  padding-top: inherit;
  height: 100%;
  width: 100%;
`;

const HomeHeroText = styled.div`
	background-color: ${props => props.theme.colors.black};
  color: white;
  display: flex;
  flex-flow: column;
  padding: 1em 2em;
  text-align: center;

  h1 {
    text-transform: uppercase;
    color: white;
    letter-spacing: .1em;
    font-weight: 400;
    font-size: 2rem;
    margin-bottom: .25em;
  }

  h2 {
    font-size: 1em;
    font-weight: normal;
  }
`;

const PatternCta = styled.div`
  align-items: center;
  background-color: whiteSmoke;
  display: flex;
  justify-content: center;
  height: 100px;
  text-align: center;
  padding: ${props => props.theme.padding.mobile};
  font-size: 1em;

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    line-height: 1.5;
    padding: 0 ${props => props.theme.padding.default};
    text-align: left;
    font-weight: 300;
  }
`;

const RandomPatternLink = styled.a`
	color: ${props => props.theme.colors.mint};
`;

const StyledImage = styled(Image)`
  max-width: 100%;
  max-height: 100%;
`;

const	generateTiles = (pattern) => {
  const tilesForReturn = [];
  
  for(var i = 0; i <= 11; i++) {
    tilesForReturn.push(pattern.painted);
  }

  return tilesForReturn;
};

const HomeHero = ({initialPattern}) => {
	const [pattern, setPattern] = useState(initialPattern);
  const updatePattern = (e) => {
    e && e.preventDefault();

    return setPattern(pickRandomPattern);
  };

	return (
		<React.Fragment>
	    <HomeHeroContainer>
	      <HomeHeroBackground>
	        {
	          generateTiles(pattern).map((tile, i) => {
	            return (
	            	<HomeHeroTile key={`${pattern.rotationClass}-${i}`}>
	                <StyledImage priority height="1000" width="1000" src={tile || "/placeholder.jpg"} />
	            	</HomeHeroTile>
	            )
	          })
	        }
	      </HomeHeroBackground>
        <HomeHeroTextContainer>
          <HomeHeroText>
            <h1>Kibak Tile</h1>
            <h2>Design, make, bake, repeat. Hand-painted ceramic tile made in Oregon since 1981.</h2>
          </HomeHeroText>
        </HomeHeroTextContainer>
	    </HomeHeroContainer>
	    {
	      pattern &&          
	      <PatternCta>
	        <p>
	          You are looking at our&nbsp;
	          <Link href={pattern.url}>
	          	<RandomPatternLink>
		            {pattern.name}
	            </RandomPatternLink>
	          </Link>&nbsp;pattern. View more of our <Link href="/catalog"><a>Catalog</a></Link> online or
	          download the <RandomPatternLink href={pdfUrl}>full PDF</RandomPatternLink>
	        </p>
	      </PatternCta>
	    }
    </React.Fragment>
  );
};

export default HomeHero;
