import React, { Component } from 'react';
import classnames from'classnames';

class TextArea extends Component {
	render() {
		const { placeholder, name, className, value, onChange, ...rest } = this.props;

		return (
			<textarea 
				className={classnames('TextArea', className)}  
				placeholder={placeholder} 
				name={name} 
				value={value} 
				onChange={onChange}
				{...rest}
			/>
		);
	}
};

export default TextArea;