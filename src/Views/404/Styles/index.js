import styled from 'styled-components';
import RobotImage from './../../../sources/images/404.svg';

export const ContainerPage = styled.div`
	position: absolute;
	width: 100%;
	height: 100vh;

	display: grid;
	grid-template:"barMenu" min-content
				  "message" min-content
				  "imageError" min-content
				  "options" 1fr
				  "footer" 1fr; 
	grid-gap: 1rem;
`;

export const BarMenu = styled.div`
	position: relative;
	grid-area: barMenu;
	display: grid;
	grid-template: "logo" min-content;

	img{
		max-height: 50px;
	}
`;

export const Message = styled.div`
	grid-area: message;

	display: grid;
	justify-content: center;
	align-content: center;

	p{
		background: var(--highlighter);
		color: var(--textColorPrimary);
		padding: 10px;
		border-radius: 20px;

		span{
			color: var(--secundaryColor);
			font-weight: bold;
		}
	}
`;

export const ErrorImage = styled.div`
	background: url(${ RobotImage });
	background-size:contain;
	background-position: center;
	background-repeat: no-repeat;
	height: 50vh;
	width: auto;
`;

export const Actions = styled.div`
	grid-area: options;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(100px,min-content));
	grid-gap: 1rem;
	justify-content: center;
	align-items: center;
`;

export const Footer = styled.footer`
	grid-area: footer;
	color: var(--textColorSecundary);
	background: var(--footer);
	text-align: center;
`;