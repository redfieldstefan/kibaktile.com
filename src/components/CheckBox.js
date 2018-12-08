import React from "react";
import classnames from "classnames";

const CheckBox = ({id, name, onChange, label, value, className}) => (
	<div className={classnames("CheckBox", className)}>
		<input id={id} type="checkbox" name={name} onChange={onChange} value={value}/>
		<label for={id}>{label}</label>
	</div>
);

export default CheckBox;