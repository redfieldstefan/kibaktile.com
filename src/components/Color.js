import React from "react";

const Color = ({color}) => (
	<div class="Color">
		<img alt={color.name} src={color.swatch}/>
		<div class="color-text">
			<p>{color.name}</p>
			<button>Share</button>
		</div>
	</div>
);

export default Color;