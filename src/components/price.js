import React from "react";
import priceGroups, { findPricePerFoot } from "../helpers/price-groups";

const Price = () => (
	<div className="price-container">
		<p className="price-dimension">{dimension}</p>
		<p className="price-cost">{cost}</p>
	</div>
);

export default Price;