import React, { useState } from "react";
import { useRouter } from 'next/router'
import styled from 'styled-components';
import Color from "./Color";
import Modal from './modal';

const StyledContainer = styled.div`
	padding: 20px;

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 0 40px 40px 40px;
  };
`;

const StyledSwatches = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;

const ColorButton = styled.button`
	flex: 0 0 50%;
	background: none;
	border: none;
	hover: cursor;

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    flex: 0 0 25%;
  };

	@media(min-width: ${props => props.theme.breakpoints.laptop}) {
		flex: 0 0 20%;
  };
`;

const ColorBlock = ({colors, header, initialColor}) => {
	const router = useRouter();
	const [selected, setSelected] = useState(initialColor);
	const [showModal, setShowModal] = useState(!!initialColor);

	const handleSelectColor = (color) => {
		setSelected(color);
 
 		router.push({
 			query: {selected: color.name}
 		})
		return setShowModal(true);
	}

	return (
		<StyledContainer>
			<h2>{header}</h2>
			<StyledSwatches>
				{
					colors.map(color => <ColorButton onClick={() => handleSelectColor(color)}><Color color={color} key={color.name}/></ColorButton>)
				}
			</StyledSwatches>
			<Modal isOpen={showModal && selected} onRequestClose={() => setShowModal(false)}>
				{ selected && <Color color={selected} key={selected.name} /> }
			</Modal>
		</StyledContainer>
	);
};

export default ColorBlock;

