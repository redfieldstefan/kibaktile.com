import React from "react";
import styled from 'styled-components';

const StyledContainer = styled.ul`
	width: 100%;
	background: black;
	display: flex;
	justifyContent: center;
	color: white;
	padding: 20px ${props => props.theme.padding.mobile};
	
	@media(min-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 1.5em;
	}
	
	@media(min-width: ${props => props.theme.breakpoints.tablet}) {
		padding: 20px 40px;
	}
`;

const Footer = () => (
  <StyledContainer>
    <li><a href="mailto:info@kibaktile.com">info@kibaktile.com</a></li>
  </StyledContainer>
);

export default Footer;
