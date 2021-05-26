import React from 'react';
import NextLink from 'next/link';

const Link = ({children, href, ...rest}) => {
	return (
		<NextLink href={href}>
			<a {...rest}>
				{children}
			</a>
		</NextLink>
	);
};

export default Link;
