import React from "react";

const Price = ({dimension, cost}) => (
	<div className="price-container">
		<p className="price-dimension">{dimension}</p>
		<p className="price-cost">{cost}</p>
	</div>
);

export default Price;