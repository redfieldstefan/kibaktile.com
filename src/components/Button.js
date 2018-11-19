import React from "react";
import classnames from "classnames";

const Button = ({className, onClick, type, children, value}) => (
	<button className={classnames("Button", className)} onClick={onClick} type={type || "submit"} value={value || "Send"}>
		{children}
	</button>
);

export default Button;