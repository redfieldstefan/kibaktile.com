import React, { Component } from 'react';
import classnames from'classnames';

class TextInput extends Component {
	render() {
		const { placeholder, name, className, value, onChange, type, ...rest } = this.props;

		return (
			<input 
				className={classnames('TextInput', className)} 
				type={type || "text"} 
				placeholder={placeholder} 
				name={name} 
				value={value} 
				onChange={onChange}
				{...rest}
			/>
		);
	}
};

export default TextInput;