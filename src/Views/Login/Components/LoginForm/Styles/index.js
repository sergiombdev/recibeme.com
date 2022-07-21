import styled from 'styled-components';
import padLockImage from './../../../../../sources/images/padlock.svg';


export const Form = styled.form`
	position: relative;
	grid-area: loginContainer;
	display: grid;
	grid-gap: 1rem;
	grid-template-rows: auto;
	box-shadow: var(--shadowGlobal);
	height: min-content;

	padding: 2rem 2rem 4rem 2rem;
	border-radius: 10px;

	justify-items: center;

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
		width: 40%;
		height: 40%;
		left: -20%;
		top: -20%;
		z-index: 1;

		@media screen and (max-width: 650px){
			width: 20%;
			height: 20%;
			left: -10%;
			top: 0;
		}
	}
`;