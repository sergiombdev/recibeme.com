import styled from 'styled-components';

export const ContainerInput = styled.div`
	display: grid;
	grid-template-columns: 1fr 30px;
	position: relative;

	background: var(--backgroundColor);
	box-shadow: var(--shadowGlobal);
	border-radius: 10px;
	justify-content: center;
	align-items: center;

	span{
		color: var(--primaryColor);
	}
`;

export const Label = styled.label`
	color: #999;
	font-size: 14px;
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 20px;
	top: 10px;
	transition: 0.2s ease all;
	-moz-transition: 0.2s ease all;
	-webkit-transition: 0.2s ease all;
`;

export const Input = styled.input`
	font-size: 14px;
	padding: 10px;
	display: block;
	border: none;
	color: var(--textColorPrimary);

	border-radius: 30px;

	&:focus {
		outline: none;
	};

	&:focus ~ ${Label}, &:valid ~ ${Label}{
		top: -10px;
		left: 20px;
		font-size: 14px;
		color: var(--primaryColor);
	
		padding: 0 3px 0 3px;
	}

`;

