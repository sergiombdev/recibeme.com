import styled from "styled-components";

export const Modal = styled.div`
	display: ${({ show }) => (show ? "grid;" : "none;")} 
	position: fixed; 
	z-index: 1; 
	left: 0;
	top: 0;
	width: 100vw; 
	height: 100vh; 

	background-color: rgba(0,0,0,0.4); 
	backdrop-filter: blur(6px);
	overflow: auto;
	justify-content: center;
	align-items: center;
	animation: .5s fadeIn;
`;

export const ModalContent = styled.div`
	background-color: #fefefe;
	padding: 1rem;
	border-radius: 10px;
	width: min-content;
	white-space: nowrap;
	font-size: 16px;

	input {
		height: 30px;
		background: cccccc;
		color: var(--tableTextColor);
		outline: none;
		font-size: 14px;
		border: 2px solid var(--primaryColor);
		border-radius: 10px;
		margin: 5px;
	}
`;

export const CloseModal = styled.button`
	border: none;
	color: va(--textColorGray);
	float: right;
	font-size: 24px;
	font-weight: bold;
	width: 30px;
	border-radius: 20px;
	color: var(--primaryColor);
	outline: none;
	background: var(--backgroundColor);
	cursor: pointer;

	:before {
		top: 100%;
		left: 100%;
		transition: all 0.7s;
	}
	:hover {
		color: var(--textColorSecundary);
		background: var(--primaryColor);
	}
`;
