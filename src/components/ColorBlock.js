import React from "react";
import Color from "./Color";

const ColorBlock = ({colors, header}) => {
	return (
		<div className="ColorBlock">
			<h2>{header}</h2>
			<div className="color-block-swatches">
				{
					colors.map(color => <Color color={color} key={color.name} />)
				}
			</div>
		</div>
	);
};

export default ColorBlock;

