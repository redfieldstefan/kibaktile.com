import React, { PropTypes } from 'react';
import { Link } from "react-router";

const TilePreview = ({image, name, url}) => {
	return (
		<li className="TilePreview">
			<img src={image} />
			<Link to={url}>{name}</Link>
		</li>
	)
};

TilePreview.propTypes = {
	image: PropTypes.string,
	name: PropTypes.string,
	url: PropTypes.string
};

TilePreview.defaultProps = {
	name: "You didnt name it you fuck"
};

export default TilePreview;
