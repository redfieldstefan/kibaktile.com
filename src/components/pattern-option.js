import React, { Component } from "react";
import styled from 'styled-components';
import Link from './link';
import Price from "./price";
import { calculateCost } from "../utils/price-groups";


const Container = styled(Link)`
	align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  padding: 20px 10px;
  width: 50%;

  &:hover {
    cursor: pointer;
    background-color: whiteSmoke;
    text-decoration: underline;
  };

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: row;
    padding: 10px;
    width: calc(100%/3);
  }

  @media(min-width: ${props => props.theme.breakpoints.laptop}) {
    width: calc(100%/4);
    padding: 10px 20px;
  }
`;

const LineDrawing = styled.img`
	width: 100px;
  max-width: 100%;
  float: left;
  background-color: white;

  @media(min-width: ${props => props.theme.breakpoints.laptop}) {
    width: 150px;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
 
  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 0 0 0 1em;
  }
`;

const Name = styled.p`
  font-size: 1rem;
  text-transform: uppercase;
  text-align: center;
  padding: 20px 0 0 0;

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    text-align: left;
    padding: 0;
  }
`;


const PatternOption = ({pattern}) => (
  <Container href={pattern.url}>
    <LineDrawing src={pattern.painted || pattern.lineDrawing} />
    <Details>
      <Name>
        {pattern.name}
      </Name>
    </Details>
  </Container>
);

export default PatternOption;
