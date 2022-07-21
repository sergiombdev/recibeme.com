import styled from 'styled-components';

export const ButtonAnimated = styled.button`
	position: relative;
	display: grid;
	grid-template-columns: 1fr 20px;
	justify-content: center;
	align-items: center;

	width: 8em;
	height: 2.6em;
	line-height: 2em;
	overflow: hidden;
	border: 2px solid var(--primaryColor);
	transition: color .5s;
	z-index: 1;
	font-size: 14px;
	border-radius: 30px;
	font-weight: bold;
	color: var(--primaryColor);
	cursor: pointer;
	background: var(--backgroundColor);
	box-shadow: var(--shadowGlobal);

	:before{
		content: "";
		position: absolute;
		z-index: -1;
		background: var(--primaryColor);
		height: 170px;
		width: 220px;
		border-radius: 50%;
	}

	:before{
		top: 100%;
		left: 100%;
		transition: all .7s;
	}
	:hover {
		color: var(--textColorSecundary);
	}


	:hover:before{
		top: -30px;
		left: -30px;
	}

	:active:before{
		background: var(--primaryColor);
		transition: background 0s;
	}

`;