import React from 'react';
import styled from 'styled-components';
import Carousel from "./carousel";
import Link from "./link";
import colors, { featured } from '../utils/colors';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 80px ${props => props.theme.padding.mobile};

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: row;
    padding: 120px ${props => props.theme.padding.default};
  }
`;

const Swatches = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 50%;
    max-width: 600px;
  }
`;

const Img = styled.img`
	width: calc(100%/3);
`;


const Text = styled.p`
	width: 600px;
	padding-top: 40px;
	max-width: 100%;
	align-self: center;
	font-size: 1.1em;
	font-weight: 400;

	@media(min-width: ${props => props.theme.breakpoints.tablet}) {
		padding-left: 80px;
		padding-top: 0;
		font-size: 1.3em;
		font-weight: 300;
  }
`;

const ColorsLink = styled(Link)`
	font-weight: bold;
`;

const ColorsBar = () => {
	return (
    <Container>
      <Swatches>
      	{ featured.map((color) => <Img src={color.swatch} alt={color.name} />) }
      </Swatches>
      <Text>
        So many <ColorsLink href="/colors">colors</ColorsLink> to choose from! 
        Browse our swatches to help pinpoint the scheme you'd like to use in your installation.
      </Text>
    </Container>
	);
};

export default ColorsBar;
