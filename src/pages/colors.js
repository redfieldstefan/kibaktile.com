import React, { Component } from "react";
import colors from "../data/colors";
import BasePage from '../components/base-page';
import ColorBlock from "../components/ColorBlock";
import CheckBox from "../components/CheckBox";
import { partition } from "lodash";

const colorFilters = () => {
	const possibleFilters = [];

	colors.forEach(color => color.filters.forEach(filter => {
		if(!possibleFilters.includes(filter)) {
			possibleFilters.push(filter)
		}
	}));

	const sheens = ["matte", "gloss", "satin"];

	const filters = partition(possibleFilters, filter => sheens.includes(filter));

	console.log("FILTERS", filters)

	return {
		sheens: filters[0],
		colors: filters[1]
	};
} 

class Colors extends Component {

	state = {
		filters: [],
		colorFilters: colorFilters().colors,
		sheenFilters: colorFilters().sheens
	}

	handleFilter = (e) => {
		const { value } = e.target;

		if(value) {
			let filters = this.state.filters.map(filter => filter);
			
			const index = filters.indexOf(value);
			if(index >= 0) {
				filters.splice(index, 1);
			} else {
				filters.push(value);
			}

			return this.setState({
				filters
			})
		}
	}

	filterColors = () => {
		if(this.state.filters.length) {		
			return colors.filter(color => {
				const matchedFilters = color.filters.filter(filter => this.state.filters.includes(filter));
				return matchedFilters.length;
			})
		}

		return colors;
	}

	render() {
		const filteredColors = this.filterColors();
		const blues = filteredColors.filter(color => color.filters.includes("blue") || color.filters.includes("green"));
		const reds = filteredColors.filter(color => color.filters.includes("red") || color.filters.includes("pink"));

		return (
			<BasePage title="Browse our color options | Kibak Tile">
				<div className="Colors">
					<div className="colors-filter">
						<h5 className="filter-headline">Filters</h5>
						<h5 className="filter-type-headline">Colors</h5>
						{
							this.state.colorFilters.map(filter => <CheckBox className={`checkbox-${filter}`} key={filter} label={`${filter}s`} value={filter} id={filter} onChange={this.handleFilter} />)
						}
						<h5 className="filter-type-headline">Finish</h5>
						{
							this.state.sheenFilters.map(filter => <CheckBox key={filter} label={filter} value={filter} id={filter} onChange={this.handleFilter} />)
						}
					</div>
					<div className="colors-swatches">
						<div className="colors-headline">
							<h1>Color Options</h1>
							<p>Beautiful design elevated with colors to fit your installation perfectly. Browse our options and contact us to request samples.</p>
						</div>
						<ColorBlock colors={filteredColors} />
					</div>
				</div>
			</BasePage>
		);
	};
};

export default Colors;