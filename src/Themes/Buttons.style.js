import styled from 'styled-components';

export const ButtonAnimated = styled.button`
	position: relative;
	display: inline-block;
	width: 8em;
	height: 2.6em;
	line-height: 2em;
	overflow: hidden;
	border: 2px solid var(--secundaryColor);
	transition: color .5s;
	z-index: 1;
	font-size: 14px;
	border-radius: 30px;
	font-weight: bold;
	color: var(--secundaryColor);
	cursor: pointer;

	:before{
		content: "";
		position: absolute;
		z-index: -1;
		background: var(--secundaryColor);
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
		background: #3a0ca3;
		transition: background 0s;
	}

`;