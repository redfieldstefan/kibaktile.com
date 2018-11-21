import React from 'react';
import classnames from 'classnames';
import Button from "./Button";

const Form = ({onSubmit, children, className}) => (
	<form className={classnames("Form", className)} action="https://formspree.io/info@kibaktile.com" method="POST">
		{children}
		<Button>Send</Button>
	</form>
);

export default Form;