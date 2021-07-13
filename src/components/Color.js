import React from "react";
import styled from "styled-components";
import Modal from './modal';

const StyledContainer = styled.div`
  text-align: center;
  padding: 20px 10px;

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 20px;
  };
`;

const StyledImage = styled.img`
  width: 100%;
`;

const StyledName = styled.p`
  margin-top: 10px;
`;

const Color = ({color = "", className}) => {
  return (
    <StyledContainer id={color.name} className={className}>
      <StyledImage alt={color.name} src={color.swatch}/>
      <StyledName>{color.name}</StyledName>
    </StyledContainer>
  );
};

export default Color;
