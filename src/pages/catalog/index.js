import React from "react";
import styled from 'styled-components';
import BasePage from "../../components/base-page";
import PatternOption from "../../components/pattern-option";
import catalog from "../../utils/catalog";

const Bar = styled.div`
  background-color: whiteSmoke;
  display: flex;
  padding: 2em;
  justify-content: center;
  line-height: 1.5em;
  margin-bottom: 1em;

  @media (min-width: $width-tablet) {
    margin-top: 0;
  }
`;

const Options = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 1em;
  margin-bottom: 40px;
  padding: 0 1em;

  @media(min-width: $width-tablet) {
    flex-direction: row;
    margin-top: 0;
  }
`;

const Link = styled.a`
  color: ${props => props.theme.colors.mint};
`;

const pdfUrl = "https://s3-us-west-2.amazonaws.com/studio-redfield/2018+Kibak+Tile+catalog.pdf";

const Catalog = () => (
  <BasePage className="Catalog" title="Kibak Tile | Catalog">
    <Bar>
      <p>
        Browse a selection of our patterns online or&nbsp;
        <Link href={pdfUrl}>
          Download Full Catalog PDF
        </Link>
      </p>
    </Bar>
    <Options>
      {
        catalog.map((pattern, i) => (
          <PatternOption pattern={pattern} key={i} />
        ))
      }
    </Options>
  </BasePage>
);


export default Catalog;
