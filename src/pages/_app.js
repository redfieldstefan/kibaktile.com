import React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import "../styles/globals.css";
import "../styles/carousel.css";
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";

const baseTheme = {
	breakpoints: {
		phone: "350px",
		tablet: "640px",
		laptop: "940px",
		desktop: "91em" // cmon stef
	},
	colors: {
		grey: "#161a1d",
		lightGrey: 'whiteSmoke',
		mint: "#30B898",
		black: "#1a1a1a" 
	},
	padding: {
		mobile: "12px",
		default: "40px"
	}
}

function MyApp({ Component, pageProps }) {
  return (
  	<div id="app">
  		<Helmet link={[{href: "https://fonts.googleapis.com/css2?family=Work+Sans:wght@300&display=swap"}]} />
	  	<ThemeProvider theme={baseTheme}>
		  	<Component {...pageProps} />
	  	</ThemeProvider>
	  </div>
  );
}

export default MyApp
