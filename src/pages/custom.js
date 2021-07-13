import React, { useState } from 'react';
import styled from 'styled-components';
import FakeLink from '../components/fake-link';
import BasePage from "../components/base-page";
import Contact from "../components/contact";

const Progression = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;

const StepsContainer = styled.div`;
	width: 50%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;

const HeadlineContainer = styled.div`
	background: ${props => props.theme.colors.black};
	color: white;
	padding: 10px ${props => props.theme.padding.mobile};
	width: 100%;
	height: 300px;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media(min-width: ${props => props.theme.breakpoints.tablet}) {
		padding: 10px ${props => props.theme.padding.default};
	}
`;

const Headline = styled.h1`
	text-transform: uppercase;
	margin-bottom: 5px;
`;


const Step = styled.span`
	width: calc(100%/3);
`;

const Img = styled.img`
	width: 100%;
`;

const Result = styled.span`
	background: center no-repeat url(${props => props.src});
	background-size: cover;
	width: 50%;
`;

const Body = styled.div`
	padding: 20px ${props => props.theme.padding.mobile};
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;

	@media(min-width: ${props => props.theme.breakpoints.tablet}) {
		padding: 80px ${props => props.theme.padding.default};
		flex-direction: row;
	}
`;

const Process = styled.ul`
	flex: 1;
	max-width: 100%;
	padding: 20px 0;

	@media(min-width: ${props => props.theme.breakpoints.tablet}) {
		padding-left: 100px;
		max-width: 500px;
	}
`;

const Summary = styled.p`
	max-width: 500px;

	text-align: justify;
`;

const Bold = styled.span`
	font-weight: 400;
`;

const Custom = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<BasePage>
			<Progression>
				<StepsContainer>
					<HeadlineContainer>
						<Headline>Kibak Custom</Headline>
						<p>Designed and fired uniquely,<br/> one of a kind.</p>
					</HeadlineContainer>
					<Step>
						<Img src="/catalog/camelot/Timeless-Camelot-6x6-8x8.png" alt="line drawing" />
					</Step>
					<Step>
						<Img src="/catalog/camelot/Camelot-4pc-linedrawing.png" alt="4 piece line drawing" /> 
					</Step>
					<Step>
						<Img src="/catalog/camelot/Camelot-GR-IH-config.jpg" alt="painted" />
					</Step>
				</StepsContainer>
				<Result src="/installs/Kibak-Kitchen-Backsplash.jpeg" alt="installed tile backsplash" />
			</Progression>
			<Body>
				<Summary>
					<Bold>It starts with a blank tile, and the rest is what you make it</Bold> <br/> And with hundreds of colored glazes and patterns to configure we can make it just right. 
					<br /><br />From residential kitchens to commercial projects viewed by thousands we have experience helping you create the perfect space.&nbsp;
					<FakeLink onClick={() => setShowModal(true)}>Contact us</FakeLink> with details about your job and vision and we'll help you get there.  
				</Summary>
				<Process>
					<li>Send us dimensions of your project</li>
					<li>We will create a concept layout and work with you to make it fit perfectly with your project</li>
          <li>Together we will create an exceptional tile mural for your space</li>
				</Process>
			</Body>
		</BasePage>
	);
};

export default Custom;
