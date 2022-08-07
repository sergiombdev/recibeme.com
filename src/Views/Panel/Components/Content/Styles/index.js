import styled from "styled-components";

export const Container = styled.div`
	grid-area: content;
	display: grid;
	grid-auto-rows: min-content;
	grid-template-columns: minmax(200px, 900px);
	justify-content: center;
	grid-gap: 1rem;
	padding-bottom: 20rem;
`;

export const Info = styled.div`
	border-radius: 10px;
	box-shadow: var(--shadowGlobal);
	padding: 1rem;
	background: var(--textColorSecundary);
	p {
		overflow-wrap: break-word;
		color: var(--textColorPrimary);
		b {
			color: var(--secundaryColor);
		}
	}

	.cm-editor {
		border-radius: 10px;
		overflow: hidden;
	}
	li {
		color: var(--secundaryColor);
		p {
			margin: 0;
		}
		a {
			text-decoration: none;
			outline: none;
		}
	}
`;

export const TokenInfo = styled.p`
	background: var(--highlighter);
	padding: 10px;
	border-radius: 10px;
`;

export const SectionApi = styled.section`
	scroll-margin-top: 60px;
`;

export const FloatButton = styled.button`
	position: fixed;
	width: 50px;
	height: 50px;
	background: var(--secundaryColor);
	border: 0;
	box-shadow: var(--shadowGlobal);
	border-radius: 50%;
	z-index: 1;
	bottom: 0.5rem;
	right: 0.5rem;
	animation: 0.5s bounceInUp;
	color: var(--textColorSecundary);
	${({ show }) => (!show ? "display:none;" : null)}
`;

export const FormReibeme = styled.form`
	position: relative;
	display: grid;
	grid-gap: 1rem;
	min-width: 500px;
	input {
		border: 0;
		outline: none;
		border-radius: 10px;
		box-shadow: var(--shadowGlobal);
		background: #2d3436;
		padding: 10px;
		color: #99c592;
	}
	button {
		max-width: 100px;
		background: var(--secundaryColor);
		border: 0;
		padding: 10px;
		border-radius: 30px;
		color: var(--backgroundColor);
	}
`;

export const ErrorMessage = styled.label`
	color: #e74c3c;
	font-size: 14px;
`;
