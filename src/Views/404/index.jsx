import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ContainerPage, BarMenu,Message, Actions, ErrorImage, Footer } from "./Styles";
import { ButtonAnimated } from './../../Themes/Buttons.style';

import logo from "./../../sources/images/logo.svg";



const Error404 = () => {
	const navigate = useNavigate();

	const goBack = () => navigate(-1);
	const goHome = () => navigate(".", { replace: true });

	return (
		<ContainerPage>
			<BarMenu>
				<img src={logo} alt="Recibeme.com" />
			</BarMenu>

			<Message>
				
				<p>
					<FontAwesomeIcon icon={["fa","circle-info"]}/> 
					&nbsp;
					La página &nbsp;
					<span>
						{window.location.href}
					</span> &nbsp;
					no existe.
				</p>

			</Message>
			
			<ErrorImage />

			<Actions>
				<ButtonAnimated onClick={goBack}> 
					Atrás 
					<span>
						<FontAwesomeIcon icon={["fa","chevron-left"]}/>
					</span>

				</ButtonAnimated>
				<ButtonAnimated onClick={goHome}> 
					Inicio
					<span>
						<FontAwesomeIcon icon={["fa","home"]}/>
					</span>

				</ButtonAnimated>

			</Actions>

			<Footer>
				<p>&copy; 2022 <b>Recibeme.com</b> <br/>Todos los derechos reservados.</p>
			</Footer>

		</ContainerPage>
	);
};

export default Error404;
