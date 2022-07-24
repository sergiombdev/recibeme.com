import styled from 'styled-components';
import padLockImage from './../../../../../sources/images/padlock.svg';


export const Form = styled.form`
	position: relative;
	background: var(--backgroundColor);
	grid-area: loginContainer;
	display: grid;
	grid-gap: 1rem;
	grid-template-rows: auto;
	box-shadow: var(--shadowGlobal);
	height: min-content;

	padding: 2rem 2rem 4rem 2rem;
	border-radius: 10px;

	justify-items: center;

	${
		({existsError})=> existsError?"animation: .5s shakeX;":""
	}

	@media screen and (max-width: 650px){
		padding: 1rem 1rem 4rem 1rem;
	}


	h4{
		text-align: center;
		color: var(--textColorGray);
		text-transform: capitalize;
	}


	&:before{
		content: "";
		position: absolute;
		background: url(${padLockImage});
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
		width: 30%;
		height: 30%;
		left: -15%;
		top: -15%;
		z-index: 1;

		animation: 1s infinite pulse;

		@media screen and (max-width: 650px){
			display: none;
		}
	}
`;