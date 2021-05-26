import React from "react";
import Color from "./Color";
import styled from 'styled-components';

const StyledContainer = styled.div`
	padding: 20px;

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 0 40px 40px 40px;
  };
`;


const StyledSwatches = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;

const StyledColor = styled(Color)`
	flex: 0 0 50%;

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    flex: 0 0 25%;
  };

	@media(min-width: ${props => props.theme.breakpoints.laptop}) {
		flex: 0 0 20%;
  };
`;

const ColorBlock = ({colors, header}) => {
	return (
		<StyledContainer>
			<h2>{header}</h2>
			<StyledSwatches>
				{
					colors.map(color => <StyledColor color={color} key={color.name} />)
				}
			</StyledSwatches>
		</StyledContainer>
	);
};

export default ColorBlock;

