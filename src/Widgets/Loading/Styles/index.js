import styled from "styled-components";
import Logo from "./../../../sources/images/boxLogo.png";

export const ContainerPage = styled.div`
	position: absolute;
	width: 100vw;
	height: 100vh;
	display: grid;
	grid-template-columns: min-content;
	grid-template-rows: min-content;
	justify-content: center;
	align-content: center;
`;

export const Loader = styled.div`
	background: url(${Logo});
	width: 100px;
	height: 100px;
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;

	animation: 2s infinite rubberBand;
`;
