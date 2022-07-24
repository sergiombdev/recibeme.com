import styled from 'styled-components';
import serverImage from './../../../sources/images/server.svg';
import simpleShiny from './../../../sources/images/simpleShiny.svg';

export const ContainerPage = styled.div`
	height: 100vh;
	grid-area: page;
	display: grid;
	grid-template:  "logo" min-content
				 	"login" 1fr
				 	"copyright" min-content;

	box-shadow: var(--shadowGlobal);

	overflow-x: hidden;
`;

export const Logo = styled.div`
	grid-area: logo;
	background: var(--backgroundColor);
	img{
		max-height: 40px;
	}
`;

export const LoginContainer = styled.div`
	grid-area: login; 
	display: grid;
	background: url(${ simpleShiny });
	background-size: cover;
	background-position: center;

	grid-template-columns: repeat(2,.5fr);
	grid-template-areas: "image loginContainer";

	justify-items: center;
	align-items: center;

	@media screen and (max-width: 650px){
		grid-template-columns: 1fr;
		grid-template-areas: "loginContainer";
		padding: 1rem;
	}

`;

export const Copyright = styled.footer`
	grid-area: copyright;
	text-align: center;
	font-size: 13px;
	background: var(--primaryColor);
	color: var(--textColorSecundary);
`;

export const ImageServer = styled.div`
	grid-area:image;
	background: url(${serverImage});
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
	width: 70%;
	height: 70%;
	min-width: 300px;



	animation: .5s bounceIn;

	@media screen and (max-width: 650px){
		display: none;
	}
`;