import styled from "styled-components";

export const Container = styled.div`
	background: var(--backgroundColorGray);

	display: grid;
	min-height: 100vh;
	width: 100%;
	grid-template:
		"barMenu" min-content
		"content" 1fr;

	grid-gap: 2rem;
`;

export const BarMenu = styled.div`
	position: sticky;
	top: 0;
	grid-area: barMenu;
	background: var(--backgroundColor);
	box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
	display: grid;
	grid-template-columns: min-content 1fr min-content;
	grid-template-areas: "logo empty closeSession";

	padding: 5px;
	z-index: 1;

	img {
		grid-area: logo;
		max-height: 40px;
	}

	button {
		grid-area: closeSession;
		margin: 0;
	}
`;
