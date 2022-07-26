import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { ContainerPage, Logo, LoginContainer, Copyright, ImageServer } from "./Styles";
import recibemeLogo from "./../../sources/images/logo.svg";

import { LoginForm } from "./Components/LoginForm";

const Login = () => {
	const navigate = useNavigate();

	useEffect(() => {
		if (localStorage.recibemeStoreToken) {
			navigate("/admin/store", { replace: true });
		}
	}, [navigate]);

	return (
		<ContainerPage>
			<Logo>
				<img src={recibemeLogo} alt="Recibeme.com" />
			</Logo>

			<LoginContainer>
				<ImageServer />
				<LoginForm />
			</LoginContainer>

			<Copyright>
				<p>&copy; 2022 Recibeme.com. All rights reserved.</p>
			</Copyright>
		</ContainerPage>
	);
};

export default Login;
