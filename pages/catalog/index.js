import React from 'react';
import Nav from '../../components/nav';
import TilePreview from "../../components/tile-preview";
import tiles from '../../data/tiles';

const Catalog = () => {
	return (
		<div className="Catalog">
			<Nav />
			<div className="content">
				<h1 className="catalog-h1">Catalog</h1>
				<ul>
					{
						tiles.map( tile => <TilePreview {...tile} />)
					}
				</ul>
			</div>

		</div>
	)
};

export default Catalog;

// TODO bring in nav component, make/import list of tiles, create tile component, each tile component links to its own page
