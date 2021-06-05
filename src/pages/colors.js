import React, { useState } from "react";
import classnames from "classnames";
import { partition } from "lodash";
import styled from 'styled-components';
import colors from "../utils/colors";
import BasePage from '../components/base-page';
import ColorBlock from "../components/ColorBlock";
import CheckBox from "../components/CheckBox";
import FakeLink from '../components/fake-link';

const StyledColors = styled.div`
	display: flex;
	flex-direction: row;
`;

const StyledFilters = styled.div`
	width: 250px;
	margin-left: ${props => props.open ? "0px" : "-225px"};
	position: fixed;
  padding-top: 10px;
  overflow-y: scroll;
	text-transform: uppercase;
	z-index: 0;
	height: 100%;
	-webkit-box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.10);
	-moz-box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.10);
	box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.10);
	background-color: white;
	transition: margin-left .5s;

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-left: 0;
    padding-top: 0;
  };
`;

const StyledFiltersHeadline = styled.h5`
	text-transform: uppercase;
	letter-spacing: .1em;
  font-weight: 400;
  font-size: 1.25em;
  display: none;
  padding-left: 20px;
  padding-top: 20px;

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
  	padding: 20px 0 20px 40px;
		display: block;
  };
`;

const StyledToggle = styled(FakeLink)`
	position: absolute;
	font-size: 10px;

	@media(min-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  };

  ${props => props.openFilter 
  	? `
			top: 35%;
	  	transform: rotate(90deg);
	  	right: 0;
	  	display: ${props => props.open ? "none" : 'block'}
  	`
  	: `
			top: 15px;
	  	right: 25px;
  	`
  }
`;

const StyledType = styled.h5`
	padding: 5px 0 5px 40px;
	letter-spacing: .1em;
  font-weight: 400;
  font-size: 12px;

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 15px 0 15px 40px;
    background-color: ${props => props.theme.colors.lightGrey};
  };
`;

const StyledRadioGroup = styled.div`
	 padding: 10px 0 2px 0;
`;

const StyledHeadlineContainer = styled.div`
	width: 100%;
	text-align: center;
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 40px;
  };
`;

const StyledCheckbox = styled(CheckBox)`
	padding: 0px 0 6px 40px;
  font-size: 10px;

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 12px;
    padding: 0px 0 8px 40px;
  };
	
	label {
		padding-left: 5px;
     margin-left: 5px;
		border-left: ${props => props.color && `4px solid ${props.color === "neutral" ? "#F1EAD1" : props.color}`};
	}
`;

const StyledHeadline = styled.h1`
	text-transform: uppercase;
	letter-spacing: .1em;
  font-weight: 400;
  font-size: 2em;
  padding-bottom: 20px;
`;

const StyledParagraph = styled.p`
	padding: 0;
	line-height: 1.5;
	max-width: 600px;

	@media(min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 0 60px;
  };
`;

const StyledSwatches = styled.div`
	padding-left: 25px;
	flex: 0 0 100%;

	@media(min-width: ${props => props.theme.breakpoints.tablet}) {
    padding-left: 250px;
  };
}
`

const colorFilters = () => {
	const possibleFilters = [];

	colors.forEach(color => color.filters.forEach(filter => {
		if(!possibleFilters.includes(filter)) {
			possibleFilters.push(filter)
		}
	}));

	const sheens = ["matte", "gloss", "satin", "metallic"];
	const filters = partition(possibleFilters, filter => sheens.includes(filter));

	return {
		sheens: filters[0],
		colors: filters[1]
	};
}

const Colors = ({initialColor}) => {
	const [filters, setFilters] = useState([]);
	const [filtersOpen, setFiltersOpen] = useState(false);
	
	const filterOptions = colorFilters();

	const filterColors = () => {
		if(filters.length) {
			return colors.filter(color => {
				const matchedFilters = color.filters.filter(filter => filters.includes(filter));
				return matchedFilters.length;
			})
		}

		return colors;
	};

	const handleFilter = (e) => {
		const { value } = e.target;

		if(value) {
			let newFilters = filters.map(filter => filter);

			const index = newFilters.indexOf(value);
			if(index >= 0) {
				newFilters.splice(index, 1);
			} else {
				newFilters.push(value);
			}

			return setFilters(newFilters);
		}
	}

	return (
		<BasePage title="Browse our color options | Kibak Tile">
			<StyledColors>
				<StyledFilters open={filtersOpen}>
					<StyledToggle closeFilter onClick={() => setFiltersOpen(false)}>Close</StyledToggle>
					{!filtersOpen && <StyledToggle openFilter onClick={() => setFiltersOpen(true)}>Filters</StyledToggle>}
					<StyledFiltersHeadline>Filters</StyledFiltersHeadline>
					<div>
						<StyledType>Colors</StyledType>
						<StyledRadioGroup>
							{
								filterOptions.colors.map(filter => <StyledCheckbox color={filter} className={`checkbox-${filter}`} key={filter} label={`${filter}s`} value={filter} id={filter} onChange={handleFilter} />)
							}
						</StyledRadioGroup>
					</div>
					<div>
						<StyledType>Finish</StyledType>
						<StyledRadioGroup>
							{
								filterOptions.sheens.map(filter => <StyledCheckbox key={filter} label={filter} value={filter} id={filter} onChange={handleFilter} />)
							}
						</StyledRadioGroup>
					</div>
				</StyledFilters>
				<StyledSwatches>
					<StyledHeadlineContainer>
						<StyledHeadline>Color Options</StyledHeadline>
						<p>Beautiful design elevated with colors to fit your installation perfectly. Browse our options and <a href="/#contact">contact us</a> to request samples.</p>
					</StyledHeadlineContainer>
					<ColorBlock colors={filterColors()} initialColor={initialColor}/>
				</StyledSwatches>
			</StyledColors>
		</BasePage>
	);
};

Colors.getInitialProps = ({query}) => {
	const initialColor = query.selected && colors.find(color => color.name.toLowerCase() === query.selected.toLowerCase());

	console.log("initialColor", initialColor)

	return {
		initialColor
	}
}

export default Colors;
