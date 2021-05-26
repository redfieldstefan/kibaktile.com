import React from 'react';
import styled from 'styled-components'

const StyledImage = styled.img`
	background: whiteSmoke;
`;

const Image = (props) => {
	return (
		<StyledImage {...props} />
	);
};

export default Image;
