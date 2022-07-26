import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { InputRecibeme } from "./../../../../Widgets/InputRecibeme";
import { Form } from "./Styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonAnimated } from "./../../../../Themes/Buttons.style";

import { isEmpty } from "./../../../../Events/validate.events";
import { isStore } from "./../../../../Events/requests.events";

export const LoginForm = () => {
	const [existsError, setExistsError] = useState(false);
	const [submit, setSubmit] = useState(false);
	const navigate = useNavigate();

	const animateError = (validValues) => {
		setExistsError(!validValues);
		setTimeout(() => setExistsError(false), 550);
	};

	const submitEvent = async (e) => {
		e.preventDefault();
		const data = Object.fromEntries(new FormData(e.target).entries());
		let validValues = Object.entries(data).every((val) => isEmpty(val[1]));

		animateError(validValues);

		if (validValues) {
			setSubmit(true);
			try {
				await isStore(data);
				setSubmit(false);
				navigate(
					`/admin/${localStorage.recibemeStoreInfo}`,
					{
						replace: false,
					},
				);
			} catch (e) {
				setSubmit(false);
				animateError(false);
			}
		}
	};

	return (
		<Form autoComplete="off" existsError={existsError} onSubmit={submitEvent}>
			<h4>rest api</h4>

			<InputRecibeme
				name="username"
				nameLabel="Usuario"
				required={true}
				type="text"
				autoComplete="off"
			>
				<span>
					<FontAwesomeIcon icon={["fa", "user"]} />
				</span>
			</InputRecibeme>

			<InputRecibeme
				name="password"
				nameLabel="Contraseña"
				required={true}
				type="password"
				autoComplete="new-password"
			>
				<span>
					<FontAwesomeIcon icon={["fa", "key"]} />
				</span>
			</InputRecibeme>

			<ButtonAnimated disabled={submit}>
				{submit ? "Verificando" : "Entrar"}
				<span>
					<FontAwesomeIcon
						icon={submit ? ["fa", "spinner"] : ["fa", "right-to-bracket"]}
						spin={submit}
					/>
				</span>
			</ButtonAnimated>
		</Form>
	);
};
