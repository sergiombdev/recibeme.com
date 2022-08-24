import styled from "styled-components";

import ImagePending from "./../../../../sources/images/pendiente.png";
import ImageEnviado from "./../../../../sources/images/enviado.png";
import ImageEntregado from "./../../../../sources/images/entregado.png";

export const Card = styled.div`
	background: var(--backgroundColor);
	display: grid;
	grid-template-columns: 1fr minmax(100px, 200px);
	grid-template-areas: "data image";

	padding: 1rem;

	border-radius: 10px;
	overflow: hidden;
	box-shadow: var(--shadowGlobal);

	animation: 1s bounceIn;
`;

export const DataCard = styled.div`
	grid-area: data;
	display: grid;
	grid-auto-rows: min-content;
	grid-gap: 1rem;

	p {
		color: #636e72;
		font-weight: bold;
		padding: 0 0 0 10px;
	}
`;

export const Image = styled.div`
	background: red;
	grid-area: image;

	background: url(${({ data }) =>
		data === 1
			? ImagePending
			: data === 2
			? ImageEnviado
			: data === 3
			? ImageEntregado
			: ImagePending});
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
`;

export const InfoData = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-templeate-rows: repeat(2, min-content);
	label {
		font-size: 14px;
		color: var(--textColorGray);
		b {
			color: #636e72;
		}
	}
	p {
		padding: 5px;
		margin: 0;
		color: #636e72;
		font-weight: bold;
	}

	th {
		white-space: nowrap;
		padding-top: 4px;
		padding-bottom: 4px;
		background: var(--primaryColor);
		color: var(--backgroundColor);
	}

	tr {
		:nth-child(even) {
			background: #f2f2f2;
		}

		:hover {
			background: #ddd;
		}
	}

	td {
		padding: 4px;
		border-top: 1px solid white;
	}
`;

export const Button = styled.button`
	border-radius: 30px;
	border: 2px solid var(--primaryColor);
	color: var(--primaryColor);
	outline: none;
	padding: 5px 0 5px 0;
	background: var(--backgroundColor);
	cursor: pointer;

	:before {
		top: 100%;
		left: 100%;
		transition: all 0.7s;
	}
	:hover {
		color: var(--textColorSecundary);
		background: var(--primaryColor);
	}
`;

export const Select = styled.select`
	height: 35px;
	background: var(--backgroundColor);
	border: 1px solid var(--primaryColor);
	color: #636e72;
	outline: none;
	font-size: 14px;
	border-radius: 10px;
`;
