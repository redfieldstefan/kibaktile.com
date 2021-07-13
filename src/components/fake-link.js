import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	color: inherit;
	border: none;
	outline: none;
	background: none;
	font-size: inherit;
	cursor: pointer;
	padding: 0;
	margin: 0;
	
	&:hover { 
		text-decoration: underline 
	};
`;

const FakeLink = ({children, ...rest}) => {
	return (
		<StyledButton {...rest}>
			{children}
		</StyledButton>
	);
};

export default FakeLink;
