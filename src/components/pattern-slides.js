import React from 'react';
import styled from 'styled-components';
import Carousel from "./carousel";
import Link from "./link";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 80px ${props => props.theme.padding.mobile};

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: row;
    padding: 120px ${props => props.theme.padding.default};
  }
`;

const CarouselContainer = styled.div`
	width: 100%;

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 50%;
  }

  @media(min-width: ${props => props.theme.breakpoints.laptop}) {
    width: 30%;
  }

`;

const Slide = styled.div`
	padding: 40px;
`;


const NameContainer = styled.div`
	padding: 10px;
	text-decoration: underline;
	text-transform: uppercase;
`;

const Text = styled.p`
	width: 800px;
	padding-top: 40px;
	max-width: 100%;
	align-self: center;
	font-size: 1.1em;
	font-weight: 400;

	@media(min-width: ${props => props.theme.breakpoints.tablet}) {
		padding-left: 40px;
		padding-top: 0;
		font-size: 1.3em;
		font-weight: 300;
  }
`;

const CatalogLink = styled(Link)`
	font-weight: bold;
`;

const Paragraph = styled.p`
	padding-bottom: 10px;
`;

const PatternSlides = ({patterns}) => {
	return (
    <Container>
      <CarouselContainer>
	      <Carousel showThumbs={false} showIndicators={false} >
	      	{
	      		patterns.filter(({name, painted}) => name && painted).map(({name, painted, url}) => {
	      			return (
							     <Link href={url}>
								<Slide>
							        <img src={painted} />
							        <NameContainer>
							        	{ name }
							        </NameContainer>
					      </Slide>
					        </Link>
	      			);
	      		})
	      	}
	      </Carousel>
      </CarouselContainer>
      <Text>
      	<Paragraph>
        Explore our <CatalogLink href="/catalog">catalog</CatalogLink> to find the perfect patterns for your installation. 
        We work with you to customize each pattern with whatever color scheme you choose for your project, giving you endless possibilities.
        </Paragraph> 
        <Paragraph> Not a lot of people get to say this and mean it; When we're done you will have something one of a kind.</Paragraph>
      </Text>
    </Container>
	);
};

export default PatternSlides;
