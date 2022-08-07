import styled from "styled-components";

export const Modal = styled.div`
	display: ${({show})=>show?"block;":"none;"} 
	position: fixed; 
	z-index: 1; 
	left: 0;
	top: 0;
	width: 100%; 
	height: 100%; 
	overflow: auto; 

	background-color: rgba(0,0,0,0.4); 
	backdrop-filter: blur(6px);

`;

export const ModalContent = styled.div`
	background-color: #fefefe;
	margin: 15% auto;
	padding: 1rem;
	border-radius: 10px;
	width: min-content;
	white-space: nowrap;
	font-size: 16px;
`;

export const CloseModal = styled.button`
	background: transparent;
	border-radius: 10px;
	border: none;
	margin-left: 75%;
	color: va(--textColorGray);
	float: top;
	font-size: 24px;
	font-weight: bold;

`;