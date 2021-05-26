import React from 'react';
import styled from 'styled-components';
import Link from './Link';

const Trail = styled.ul`
	padding: ${props => props.theme.padding.mobile} ${props => props.theme.padding.mobile} 0 0;
	color: ${props => props.theme.colors.black};

	@media(min-width: ${props => props.theme.breakpoints.tablet}) {
		padding: ${props => props.theme.padding.mobile} ${props => props.theme.padding.default} 0 0;
	}
`;

const Breadcrumb = styled(Link)`
	text-decoration: underline;
`;

const Divider = styled.span`
	padding: 0 3px;
`;

const Breadcrumbs = ({breadcrumbs, ...rest}) => {
	return (
		<Trail {...rest}>
			{
				breadcrumbs.map((crumb, index) => {
					return (
						<React.Fragment>
							<Breadcrumb href={crumb.href}>
								{crumb.label}
							</Breadcrumb>
							{
								index + 1 !== breadcrumbs.length &&
								<Divider>
								/
								</Divider>
							}
						</React.Fragment>
					);
				})
			}
		</Trail>
	);
};

export default Breadcrumbs;
