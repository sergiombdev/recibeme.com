import styled from 'styled-components';
import imagePage from './../../../sources/images/workTime.svg';

export const ContainerPage = styled.div`
	min-height: 100vh;
	display: grid;
	grid-template:  "logo" min-content
				 	"login" 1fr
				 	"copyright" min-content;

	max-width: 1600px;
	margin: 0 auto;
`;

export const Logo = styled.div`
	grid-area: logo;
	img{
		max-height: 70px;
	}
`;

export const LoginContainer = styled.div`
	grid-area: login; 
	display: grid;
	grid-template-columns: repeat(2,.5fr);
	grid-template-areas: "image loginContainer";

	justify-items: center;
	align-items: center;

	@media screen and (max-width: 650px){
		grid-template-columns: 1fr;
		grid-template-areas: "loginContainer";
	}

`;

export const Copyright = styled.footer`
	grid-area: copyright;
	text-align: center;
	font-size: 13px;
	color: var(--textColorGray);
`;

export const ImageServer = styled.div`
	grid-area:image;
	background: url(${imagePage});
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
	width: 80%;
	height: 80%;
	min-width: 300px;

	@media screen and (max-width: 650px){
		display: none;
	}
`;