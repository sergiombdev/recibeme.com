import styled from "styled-components";

export const ContainerPage = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: min-content 1fr;
	padding: 2rem;
	grid-gap: 2rem;

`;

export const Select = styled.select`
	height: 35px;
	background: cccccc;
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

export const Search = styled.input`
	height: 40px;
	font-size: 20px;
	width: 50%;
	border: 2px solid #aaa;
	border-radius: 10px;
	outline: none;
	box-sizing: border-box;
	transition: 0.3s;
	padding-left: 25px;
	margin: 0 auto;
	:focus {
		border-color: var(--primaryColor);
		box-shadow: 0 0 8px 0 var(--primaryColor);
	}


`;


// card

export const Card = styled.div`
	background: var(--backgroundColor);
	display:grid;
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
	grid-template-columns: repeat(auto-fill, minmax(200px,400px));
	grid-auto-rows: min-content;
	justify-content: center;
	grid-gap: 1rem;
	overflow: ${({show})=>show?"auto":"hidden"};
	max-height: calc(100vh - 200px);
`;



//table
/*export const ContainerScrollTable = styled.div`
	display: grid;
	grid-template-rows: min-content;
	border-radius: 20px;
	overflow: auto;
`;

export const ContainerTable = styled.div`
	display: grid;
	background: var(--backgroundColor);
	border-radius: 20px;
	box-shadow: var(--shadowGlobal);
	padding: 1rem;
	height: 75vh;
`;

export const StyledTable = styled.table`
	background: var(--tableBackgroundColor);
	font-size: 16px;
	color: var(--tableTextColor);
	border-collapse: collapse;
	border-radius: 15px;
	overflow-y: hidden;

	th {
		top: 0;
		position: sticky;
		background: var(--secundaryColor);
		color: var(--textColorSecundary);
		height: 25px;
		white-space: nowrap;
		padding-top: 12px;
  		padding-bottom: 12px;
	}

	tr{
		:nth-child(even){
			background: #f2f2f2;;
		}

		:hover{
			background: #ddd;
		}

	}

	td {
		padding: 8px;
		text-align: center;
		border-top: 1px solid white;
		height: 25px;

	}
`;*/

