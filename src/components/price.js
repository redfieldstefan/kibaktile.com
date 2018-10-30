import React from "react";
import priceGroups, { findPricePerFoot } from "../helpers/price-groups";

const Price = ({dimension, cost}) => (
	<div className="price-container">
		<p className="price-dimension">{dimension}:</p>
		<p className="price-cost">&nbsp;${cost} sq ft</p>
	</div>
);

export default Price;