import React from "react";
import styled from 'styled-components';

const StyleButton = styled.button`
	padding: 10px 40px;
	background: ${props => props.theme.colors.black};
	text-transform: uppercase;
	color: white;
	border: 0;
	outline: 0;
`;

const Button = ({children, ...rest}) => {
	return (
		<StyleButton {...rest}>
			{children}
		</StyleButton>
	);
};

export default Button;
