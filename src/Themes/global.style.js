import { createGlobalStyle } from "styled-components";

//palette colors
import { light } from "./colors.palette";

//fonts
import robotoLightWoof from "./../sources/fonts/roboto-v30-latin/roboto-v30-latin-300.woff";
import robotoLightWoof2 from "./../sources/fonts/roboto-v30-latin/roboto-v30-latin-300.woff2";
import robotoLightTtf from "./../sources/fonts/roboto-v30-latin/roboto-v30-latin-300.ttf";
import robotoLightEot from "./../sources/fonts/roboto-v30-latin/roboto-v30-latin-300.eot";
import robotoLightSvg from "./../sources/fonts/roboto-v30-latin/roboto-v30-latin-300.svg";

import robotoRegularWoof from "./../sources/fonts/roboto-v30-latin/roboto-v30-latin-regular.woff";
import robotoRegularWoof2 from "./../sources/fonts/roboto-v30-latin/roboto-v30-latin-regular.woff2";
import robotoRegularTtf from "./../sources/fonts/roboto-v30-latin/roboto-v30-latin-regular.ttf";
import robotoRegularEot from "./../sources/fonts/roboto-v30-latin/roboto-v30-latin-regular.eot";
import robotoRegularSvg from "./../sources/fonts/roboto-v30-latin/roboto-v30-latin-regular.svg";

import robotoBoldWoof from "./../sources/fonts/roboto-v30-latin/roboto-v30-latin-700.woff";
import robotoBoldWoof2 from "./../sources/fonts/roboto-v30-latin/roboto-v30-latin-700.woff2";
import robotoBoldTtf from "./../sources/fonts/roboto-v30-latin/roboto-v30-latin-700.ttf";
import robotoBoldEot from "./../sources/fonts/roboto-v30-latin/roboto-v30-latin-700.eot";
import robotoBoldSvg from "./../sources/fonts/roboto-v30-latin/roboto-v30-latin-700.svg";

export const GlobalStyle = createGlobalStyle`
	
	:root{
		{
			${Object.entries(light).map((data) => `--${data[0]}: ${data[1]};`)}
		}
	}

	@font-face {
		font-family: 'Roboto';
		src: url(${robotoLightWoof2}) format('woff2'),
			 url(${robotoLightWoof}) format('woff'),
			 url(${robotoLightTtf}) format('truetype'),
			 url(${robotoLightEot}) format('embedded-opentype'),
			 url("${robotoLightSvg}#Roboto") format('svg');

		font-style: normal;
		font-weight: 300;
	}

	@font-face {
		font-family: 'Roboto';
		src: url(${robotoRegularWoof2}) format('woff2'),
			 url(${robotoRegularWoof}) format('woff'),
			 url(${robotoRegularTtf}) format('truetype'),
			 url(${robotoRegularEot}) format('embedded-opentype'),
			 url("${robotoRegularSvg}#Roboto") format('svg');
			 
		font-style: normal;
		font-weight: 400;
	}

	@font-face {
		font-family: 'Roboto';
		src: url(${robotoBoldWoof2}) format('woff2'),
			 url(${robotoBoldWoof}) format('woff'),
			 url(${robotoBoldTtf}) format('truetype'),
			 url(${robotoBoldEot}) format('embedded-opentype'),
			 url("${robotoBoldSvg}#Roboto") format('svg');
			 
		font-style: normal;
		font-weight: 700;
	}

	body {
	  margin: 0;
	  font-family: 'Roboto';
	}

	button{
		outline: none;
	    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	    cursor: pointer;
	}

	::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
	  color: #bdbdbd;
	  opacity: 1; /* Firefox */
	}

	:-ms-input-placeholder { /* Internet Explorer 10-11 */
	  color: #bdbdbd;
	}

	::-ms-input-placeholder { /* Microsoft Edge */
	  color: #bdbdbd;
	}
`;
