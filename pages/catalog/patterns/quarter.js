import React from 'react';
import Nav from '../../../components/nav';
import tiles from "../../../data/tiles";
import PatternPage from "../../../components/pattern-page";


const Quarter = () => {
	return (
		<div className="Quarter">
			<Nav />
			<div className="content">
			<PatternPage pattern={tiles[3]} />
			</div>
		</div>
	)
};

export default Quarter;
