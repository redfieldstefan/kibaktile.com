import React from "react";

const Price = ({dimension, cost, placeholder}) => (
	<div className="price-container">
		{
			placeholder
				? <p className="price-placeholder">{placeholder}</p>
				: <React.Fragment>
						{dimension && <p className="price-dimension">{dimension}:</p>}
						{cost && <p className="price-cost">&nbsp;${cost} sq ft</p>}
					</React.Fragment>
		}
	</div>
);

export default Price;