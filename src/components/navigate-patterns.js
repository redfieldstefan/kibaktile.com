import React from 'react';
import styled from 'styled-components';
import NextPrevPattern from "./next-prev-pattern";

const Container = styled.div`
	display: flex;
  width: 100%;
  padding: 40px 0;
  justify-content: space-between;

  @media(min-width: $width-tablet) {
    padding: 40px 20px;
  }

  .previous {
    float: left;
    width: 100%;

    @media(min-width: $width-tablet) {
      width: auto;
    }
  }

  .next {
    float: right;
    width: 100%;

    @media(min-width: $width-tablet) {
      width: auto;
    }
  }
`;

const NavigatePatterns = ({previous, next, ...rest}) => {
  return (
  	<Container {...rest}>
  		<NextPrevPattern direction="previous" pattern={previous} />
  		<NextPrevPattern direction="next"  pattern={next} />
  	</Container>
  );
};

export default NavigatePatterns;
