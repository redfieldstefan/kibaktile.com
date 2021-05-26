import React from "react";
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid WhiteSmoke;
  padding: 20px ${props => props.theme.padding.mobile};
  position: fixed;
  width: 100%;
  z-index: 3;
  display: flex;
  flex-direction: column;

  @media(min-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 1.5em;
  }

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: flex-end;
    padding: 20px 40px;
  }
`;

const HeadlineLink = styled.a`
  &:hover {
    text-decoration: none;
  }
`;

const Headline = styled.h1`
  text-transform: uppercase;
  letter-spacing: .05em;
  color: rgba(0, 0, 0, .75);
  font-size: 1.5em;
  font-weight: 400;

  &:hover {
    text-decoration: none;
  };
`;

const NavLinks = styled.span`
  padding: 10px 0 0 0;
  margin-bottom: 1px;

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 0 0 0 2em;
    margin-bottom: 0;
  }
`;

const NavLink = styled.a`
  padding: 0 10px 0 0;
  font-size: .75em;

  &:hover {
    cursor: pointer;
    font-weight: 500;
  }

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    text-transform: uppercase;
    font-size: .85em;
  }
`;

const Nav = () => {
  return (
    <Container>
      <Link href="/">
        <HeadlineLink>
          <Headline>Kibak Tile</Headline>
        </HeadlineLink>
      </Link>
      <NavLinks>
        <Link href="/#contact">
          <NavLink>Contact</NavLink>
        </Link>
        <Link href="/catalog">
          <NavLink>Catalog</NavLink>
        </Link>
        <Link href="/colors">
          <NavLink>Colors</NavLink>
        </Link>
        <Link href="/catalog/sakura-cherry-tree/">
          <NavLink>Sakura</NavLink>
        </Link>
        <Link href="https://kibaktile.shop/" passHref>
          <NavLink target="blank">Shop</NavLink>
        </Link>
      </NavLinks>
    </Container>
  );
};

export default Nav;
