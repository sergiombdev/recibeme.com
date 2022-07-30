import styled from "styled-components";

export const Container = styled.div`
	grid-area: content;
	display: grid;
	grid-auto-rows: min-content;
	grid-template-columns: repeat(auto-fit,minmax(200px, 800px));
	justify-content: center;
	grid-gap: 1rem;
`;

export const Info = styled.div`
	border-radius: 10px;
	box-shadow: var(--shadowGlobal);
	padding: 1rem;
	background: var(--textColorSecundary);
	p{
		overflow-wrap: break-word;
		color: var(--textColorPrimary);
		b{
			color: var(--secundaryColor);
		}
	}

	.cm-editor{
	    border-radius: 10px;
	    overflow: hidden;
	};
	li{
		color: var(--secundaryColor);
		p{
			margin: 0;
		};
		a{
			text-decoration: none;
			outline: none;
		}
	};
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
	bottom: .5rem;
	right: .5rem;
	animation: .5s bounceInUp;
	color: var(--textColorSecundary);
	${
		({show})=> !show?"display:none;":null
	}
`;