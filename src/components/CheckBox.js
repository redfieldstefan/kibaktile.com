import React from "react";
import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	label {
		margin-left: 10px;
	}
`;

const CheckBox = ({id, name, onChange, label, value, className}) => (
	<StyledContainer className={className}>
		<input id={id} type="checkbox" name={name} onChange={onChange} value={value}/>
		<label for={id}>{label}</label>
	</StyledContainer>
);

export default CheckBox;
