import styled from "styled-components";

export const Container = styled.div`
	grid-area: content;
	display: grid;
	grid-auto-rows: min-content;
	grid-template-columns: repeat(auto-fit,minmax(200px, 800px));
	justify-content: center;
	grid-gap: 1rem;
`;

export const Info = styled.div`
	border-radius: 10px;
	box-shadow: var(--shadowGlobal);
	padding: 1rem;
	background: var(--textColorSecundary);
	p{
		overflow-wrap: break-word;
		color: var(--textColorPrimary);
		b{
			color: var(--secundaryColor);
		}
	}

	.cm-editor{
	    border-radius: 10px;
	    overflow: hidden;
	}
`;

export const TokenInfo = styled.p`
	background: var(--highlighter);
    padding: 10px;
    border-radius: 10px;
`;