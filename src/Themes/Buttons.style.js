import styled from 'styled-components';

export const ButtonAnimated = styled.button`
	position: relative;
	display: grid;
	grid-template-columns: 1fr 20px;
	justify-content: center;
	align-items: center;

	margin-top: 2rem;
	padding: 1em 2em;
	font-size: 12px;
	text-transform: uppercase;
	letter-spacing: 2.5px;
	font-weight: 500;
	color: var(--textColorPrimary);
	background-color: var(--backgroundColor);
	border: none;
	border-radius: 45px;
	box-shadow:  var(--shadowGlobal);
	transition: all 0.3s ease 0s;
	cursor: pointer;
	outline: none;

	&:hover {
		background-color: var(--primaryColor);
		box-shadow: var(--shadowGlobal);
		color: var(--textColorSecundary);
	}

	&:disabled,
	&[disabled]{
	  background-color: var(--highlighter);
	  color: var(--textColorGray);
	}
`;