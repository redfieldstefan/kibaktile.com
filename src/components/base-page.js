import React, { Component } from "react";
import classnames from "classnames";
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Nav from "./nav";
import Breadcrumbs from './breadcrumbs';
import Footer from "./Footer";

const Container = styled.div`
  width: 100%;
`;

const Body = styled.div`
  padding-top: 98px;
  width: 100%;

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    padding-top: 69px;
    min-height: calc(100vh - 69px);
  }
`;

const StyledBreadcrumbs = styled(Breadcrumbs)`
  padding: 20px ${props => props.theme.padding.mobile};

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 20px ${props => props.theme.padding.default};
  }
`;

const defaultTitle= "Kibak Tile";
const defaultDescription = "Designing, hand painting, and firing ceramic tiles of rare quality and excellence since 1981";

const BasePage = ({children, className, title, description, breadcrumbs}) => {
  return (
    <Container>
      <Helmet
        title={title || defaultTitle}
        meta={[
          { name: "description", content: description ? description : defaultDescription },
        ]}
      >
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-56313656-5"></script>
        <script>
          {
            `window.dataLayer = window.dataLayer || []
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date())
            gtag('config', 'UA-56313656-5')`
          }
        </script>
      </Helmet>

      <Nav/>


      <Body>
        {
          breadcrumbs &&
          <StyledBreadcrumbs breadcrumbs={breadcrumbs} />
        }
        {children}
      </Body>

      <Footer />
    </Container>
  );
};

export default BasePage;
