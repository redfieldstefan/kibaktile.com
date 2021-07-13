import React, { Component } from 'react';
import classnames from'classnames';
import styled from 'styled-components';

const Container = styled.label`
	display: flex;
	flex-direction: column;
`;

const Field = styled.input`
	margin-top: 3px;
	height: 35px;
`;

const Input = ({onChange, label, className, ...rest}) => {
	return (
		<Container onChange={onChange} className={className}>
			{ label }
			<Field {...rest} />
		</Container>
	);
};

export default Input;
