import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.label`
	display: flex;
	flex-direction: column;
`;

const StyledTextArea = styled.textarea`
	margin-top: 3px;
	width: 100%;
	flex: 1;
`;

const TextArea = ({label, onChange, className, ...rest}) => {
	return (
		<Container onChange={onChange} className={className} >
			<span>{label}</span>
			<StyledTextArea 
				{...rest}
			/>
		</Container>
	);
};

export default TextArea;
