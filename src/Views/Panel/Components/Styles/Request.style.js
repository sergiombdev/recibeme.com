import styled from "styled-components";

export const ContainerPage = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: min-content 1fr;
	grid-gap: 1rem;
`;

export const Select = styled.select`
	height: 35px;
	background: var(--backgroundColor);
	color: var(--tableTextColor);
	outline: none;
	font-size: 14px;
	border: none;
	border-radius: 10px;
	margin: 5px;

	option {
		background: #f3f3d2;
	}
`;

export const ContainerOptions = styled.div`
	display: grid;
	grid-template-columns: 0.8fr;
	grid-template-rows: min-content min-content;
	justify-content: center;
	grid-gap: 1rem;
`;

export const ContainerFilterDate = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(100px, min-content));
	grid-gap: 1rem;
	justify-content: center;
`;

export const OptionInput = styled.input`
	font-size: 20px;
	border: 2px solid #aaa;
	border-radius: 10px;
	outline: none;
	box-sizing: border-box;
	transition: 0.3s;
	padding-left: 25px;
	color: #636e72;
	:focus {
		border-color: var(--primaryColor);
		box-shadow: 0 0 8px 0 var(--primaryColor);
	}
`;

// card

export const Card = styled.div`
	background: var(--backgroundColor);
	display: grid;
	grid-template-columns: 1fr 100px;
	grid-template-areas: "data ïmage";
`;

export const DataCard = styled.div`
	grid-area: "data";
	display: grid;
	grid-auto-rows: min-content;
`;

export const Image = styled.div`
	width: 100px;
	background: red;
	grid-area: "image";
`;

export const InfoData = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-templeate-rows: repeat(2, min-content);
`;

export const ContainerCard = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 400px));
	grid-auto-rows: min-content;
	justify-content: center;
	grid-gap: 1rem;
	overflow: ${({ show }) => (show ? "auto" : "hidden")};
	max-height: calc(100vh - 195px);
	padding: 1rem;
`;
