import {useEffect, useState} from 'react';
import { Services } from "./Component/Services";
import { Container, Info, TokenInfo, SectionApi, FloatButton } from "./Styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { documentation } from "./documentation";

export const Content = ({ name = "", token = "" }) => {
	const [showButton, setShowButton] = useState(false);

	let moveTopScroll = () =>{
		window.scrollTo(0, 0);
	}

	useEffect(()=>{

		window.addEventListener('scroll', (event) => {
			let top  = window.pageYOffset || document.documentElement.scrollTop;
			setShowButton(top>400?true:false);
		});

	},[setShowButton]);

	// console.log(showButton);

	return (
		<>
			<Container>
				<Info>
					<p>
						Hola!, <b>{name}</b> este es tu <b>api_key</b>:
					</p>
					<TokenInfo>{token}</TokenInfo>
				</Info>

				<Info>
					<p>Servicios:</p>
					<ul>
						{documentation.map(({ url, method }, index) => (
							<li key={index}>
								<p>
									{method}:{" "}
									<a
										href={`${window.location.origin}${
											window.location.pathname
										}#service-${index + 1}`}
									>
										<b>{url}</b>
									</a>
								</p>
							</li>
						))}
					</ul>
				</Info>

				{documentation.map((data, index) => (
					<SectionApi key={index} id={`service-${index + 1}`}>
						<Info>
							<Services key={index} {...data} />
						</Info>
					</SectionApi>
				))}
			</Container>
			<FloatButton show={showButton} onClick={moveTopScroll}>
				<span>
					<FontAwesomeIcon icon={["fa","angle-up"]}/>
				</span>
			</FloatButton>
		</>
	);
};
