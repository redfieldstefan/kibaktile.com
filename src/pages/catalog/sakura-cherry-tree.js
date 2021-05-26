import React from "react";
import styled from 'styled-components';
import sakuraCherry from "../../utils/catalog/sakura-cherry-tree";
import FeaturePage from "../../components/feature-page";

const processA1 = "/catalog/sakura-cherry-tree/Cherry-Tree-process-A1.png";
const processA2 = "/catalog/sakura-cherry-tree/Cherry-Tree-process-A2.png";
const processA3 = "/catalog/sakura-cherry-tree/Cherry-Tree-process-A3.png";

const Steps = styled.ul`

`;

const Step = styled.li`
	width: 100%;
	display: flex;
	flex-direction: column-reverse;
	padding: 1em 1.5em;

	@media(min-width: ${props => props.theme.breakpoints.tablet}) {
		flex-direction: row;
	}
}

	&:nth-child(even) {
		flex-direction: column-reverse;

		@media(min-width: ${props => props.theme.breakpoints.tablet}) {
			flex-direction: row-reverse;
		}
	}
`;

const ImageContainer = styled.span`
	flex: 1;
`;

const Image = styled.img`
	width: 100%;

	&:nth-child(even) {
		float: right;
	}

	@media(min-width: ${props => props.theme.breakpoints.tablet}) {
		width: 75%;
	}
`;

const TextContainer = styled.span`
	display: flex;
	flex-direction: row;
	flex: 1;
	font-size: 1.15em;
	padding: 30px 0;
	align-items: center;
	text-align: left;
	flex-wrap: wrap;

	@media(min-width: ${props => props.theme.breakpoints.tablet}) {
		justify-content: center;
		flex-direction: column;
		text-align: center;
		padding: 50px 0;
	}
`;

const StyledNumber = styled.p`
	padding-bottom: 5px;
	font-size: 1.5em;
	font-weight: bold;
	width: 100%;

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
  	width: auto;
  }
`;

const Description = styled.p`
	max-width: 350px;
`;


const SakuraCherry = () => {
	return (
		<FeaturePage className="sakura-cherry" pattern={sakuraCherry}>
			<ul>
				<Step>
					<ImageContainer className="sakura-step-img-container">
						<Image src={processA1} className="sakura-step-1-img sakura-step-img" alt="rough draft based on dimensions" />
					</ImageContainer>
					<TextContainer className="sakura-step-text sakura-step-1-text">
						<StyledNumber>1.</StyledNumber>
						<Description>Send us dimensions of your project</Description>
					</TextContainer>
				</Step>
				<Step>
					<ImageContainer className="sakura-step-img-container">
						<Image src={processA2} className="sakura-step-2-img sakura-step-img" alt="conceptual render" />
					</ImageContainer>
					<TextContainer className="sakura-step-text sakura-step-2-text">
						<StyledNumber>2.</StyledNumber>
						<Description>We will create a concept layout and work with you to make it fit perfectly with your project</Description>
					</TextContainer>
				</Step>
				<Step>
					<ImageContainer className="sakura-step-img-container">
						<Image src={processA3} className="sakura-step-3-img sakura-step-img" alt="final installation"/>
					</ImageContainer>
					<TextContainer className="sakura-step-text sakura-step-3-text">
						<StyledNumber>3.</StyledNumber>
						<Description>Together we will create an exceptional tile mural for your space</Description>
					</TextContainer>
				</Step>
			</ul>
		</FeaturePage>
	);
} 

export default SakuraCherry;
