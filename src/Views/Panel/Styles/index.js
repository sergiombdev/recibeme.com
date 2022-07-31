import styled from 'styled-components';
import borderMenu from './../../../sources/images/borderMenu.svg';
import boxLogo from './../../../sources/images/boxLogo.png';


export const ContainerPage = styled.div`
	width: 100vw;
	height: 100vh;

	display:grid;
	grid-template-columns: 70px 1fr;
	grid-template-areas: "nav content";

	background: var(--backgroundColorGray);
`;

export const Nav = styled.div`
	grid-area: nav;
	display: grid;
	grid-template: "logo" min-content
				   "menu" 1fr
				   "configButton" 70px;
	grid-gap: 2rem;
	border-radius: 30px;
	background: var(--backgroundColor);

`;

export const Content = styled.div`
	grid-area: content;
	display: grid;
	grid-template: "header" 70px
				   "activity" 1fr;
`;

export const ContainerMenu = styled.div`
	position: relative;
	grid-area: menu;
	display: grid;
	padding: 0 1rem 0 0;
`;

export const Menu = styled.div`
	background: var(--primaryColor);
	display: grid;
	grid-template:"curveTop" 70px
				  "options" 1fr
				  "curveBottom" 70px;

	:before{
		content: "";
	    position: absolute;
	    width: calc(70px - 1rem);
	    height: calc(70px - 1rem);
	    top:0;
	    background: url(${borderMenu});
	    background-size: contain;
	    background-repeat: no-repeat;
	    background-position: center;
	    z-index: 1;
	}

	:after{
		content: "";
	    position: absolute;
	    width: calc(70px - 1rem);
	    height: calc(70px - 1rem);
	    bottom:0;
	    background: url(${borderMenu});
	    background-size: contain;
	    background-repeat: no-repeat;
	    background-position: center;
	    z-index: 1;
	    transform: rotateX(180deg);
	}


`;

export const Options = styled.div`
	grid-area: options;
	display: grid;
	justify-content: center;
		grid-template-columns: 1fr;
	grid-auto-rows: auto; 

	grid-auto-rows: min-content;
    align-content: center;

	button{
		color: var(--textColorSecundary);
	}
`;


export const ContainerLogo = styled.div`
	grid-area: logo;
	height: 40px;
	display: grid;
	padding: 18px;
`;

export const Logo = styled.div`
	background: url(${boxLogo});
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
`;


export const ContainerInfoButton = styled.div`
	position: absolute;
	display: grid;
	min-width: 150px;
	width: auto;
	height: auto;
	left: 70px;
	bottom: 15px;
	background: var(--primaryColor);
	color: var(--textColorSecundary);
	border-radius: 20px 20px 20px 0px;
	padding: 5px;

	:before{
		content: "";
		position absolute;
		width: 0;
		height: 0;
		border-right: 10px solid transparent;
		border-top: 10px solid transparent;
		border-left: 10px solid var(--primaryColor);
		border-bottom: 10px solid var(--primaryColor);

		left: -15px;
		bottom: 0;
		transform: rotateY(180deg);
	}

	display: none;
	animation: .5s bounceInLeft;

`;

export const ButtonAdmin = styled.button`
	position: relative;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background: transparent;
	color: var(--textColorPrimary);
	margin: 0 auto;
	border: 0;
	font-size: 17px;
	${
		({isShadow})=> isShadow? "box-shadow: var(--shadowGlobal);":""
	}
	:hover ${ContainerInfoButton}{
		display: block;
	}
`;