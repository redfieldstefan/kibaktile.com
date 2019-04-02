import React, { Component } from "react";
import colors from "../data/colors";
import BasePage from '../components/base-page';
import ColorBlock from "../components/ColorBlock";
import CheckBox from "../components/CheckBox";
import classnames from "classnames";
import { partition } from "lodash";

const colorFilters = () => {
	const possibleFilters = [];

	colors.forEach(color => color.filters.forEach(filter => {
		if(!possibleFilters.includes(filter)) {
			possibleFilters.push(filter)
		}
	}));

	const sheens = ["matte", "gloss", "satin", "metallic"];

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
		sheenFilters: colorFilters().sheens,
		filtersOpen: false
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

	toggleFilter = () => {
		this.setState({
			filtersOpen: !this.state.filtersOpen
		})
	}

	render() {
		const filteredColors = this.filterColors();
		const blues = filteredColors.filter(color => color.filters.includes("blue") || color.filters.includes("green"));
		const reds = filteredColors.filter(color => color.filters.includes("red") || color.filters.includes("pink"));

		return (
			<BasePage title="Browse our color options | Kibak Tile">
				<div className="Colors">
					<div className={classnames("colors-filter", {open: this.state.filtersOpen})}>
						<p className={classnames("close-filters fake-link")} onClick={this.toggleFilter}>Close</p>
						<p className={classnames("open-filters fake-link", {open: this.state.filtersOpen})} onClick={this.toggleFilter}>Filters</p>
						<h5 className="filter-headline headline">Filters</h5>
						<div className="filters-block">
							<h5 className="filter-type-headline">Colors</h5>
							<div className="filters-radio-group">
								{
									this.state.colorFilters.map(filter => <CheckBox className={`checkbox-${filter}`} key={filter} label={`${filter}s`} value={filter} id={filter} onChange={this.handleFilter} />)
								}
							</div>
						</div>
						<div className="filters-block">
							<h5 className="filter-type-headline">Finish</h5>
							<div className="filters-radio-group">
								{
									this.state.sheenFilters.map(filter => <CheckBox key={filter} label={filter} value={filter} id={filter} onChange={this.handleFilter} />)
								}
							</div>
						</div>
					</div>
					<div className="colors-swatches">
						<div className="colors-headline">
							<h1 className="headline">Color Options</h1>
							<p>Beautiful design elevated with colors to fit your installation perfectly. Browse our options and <a href="/#contact">contact us</a> to request samples.</p>
						</div>
						<ColorBlock colors={filteredColors} />
					</div>
				</div>
			</BasePage>
		);
	};
};

export default Colors;
