import styled from "styled-components";

export const ContainerPage = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: min-content;
    padding: 2rem;
    grid-gap: 2rem;
`;

export const ContainerScrollTable = styled.div`
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

    th{
		top: 0;
		position: sticky;
		background: var(--secundaryColor);
		color: var(--textColorSecundary);
		height: 25px;
		white-space: nowrap;
		padding: 4px;
    }

    td {
	    padding: 8px;
	    text-align: center;
	    border-top: 1px solid white;
	    height: 25px;
    }
`;