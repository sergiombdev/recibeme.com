import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { infoStore } from "./../../Events/requests.events";

import Loading from "./../../Widgets/Loading";
import recibemeLogo from "./../../sources/images/logo.svg";

import { Content } from "./Components/Content";

import { Container, BarMenu } from "./Styles";
import { ButtonAnimated } from "./../../Themes/Buttons.style";

const Panel = () => {
	const [isLoading, setLoading] = useState(true);
	const [dataStore, setDataStore] = useState({});
	const navigate = useNavigate();

	const closeSession = () => {
		if (window.confirm("Seguro que quieres salir?")) {
			localStorage.clear();
			navigate("/", { replace: true });
		}
	};

	useEffect(() => {
		const verifyToken = async () => {
			try {
				const { data } = await infoStore();
				navigate(`/admin/${localStorage.recibemeStoreInfo}`, {
					replace: false,
				});
				setDataStore(data);
				setLoading(false);
			} catch (e) {
				localStorage.clear();
				navigate("/", { replace: true });
			}
		};
		verifyToken();
	}, [navigate, setDataStore, setLoading]);

	return isLoading ? (
		<Loading />
	) : (
		<Container>
			<BarMenu>
				<img src={recibemeLogo} alt="Recibeme.com" />
				<ButtonAnimated onClick={closeSession}>
					Salir
					<span>
						<FontAwesomeIcon icon={["fa", "door-closed"]} />
					</span>
				</ButtonAnimated>
			</BarMenu>

			<Content {...dataStore} />
		</Container>
	);
};

export default Panel;
