import React from "react";
import styled from 'styled-components';

const Container = styled.div`
	color: $color-black;
	display: flex;
	flex-direction: row;
	font-size: 1em;
`;

const Price = ({dimension, cost, placeholder, ...rest}) => (
	<Container {...rest}>
		{
			placeholder
				? <p className="price-placeholder">{placeholder}</p>
				: <React.Fragment>
						{dimension && <p className="price-dimension">{dimension}:</p>}
						{cost && <p className="price-cost">&nbsp;${cost} sq ft</p>}
					</React.Fragment>
		}
	</Container>
);

export default Price;
