import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

import { InputRecibeme } from "./../../../../Widgets/InputRecibeme";
import { Form } from "./Styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonAnimated } from "./../../../../Themes/Buttons.style";
import { isEmpty } from "./../../../../Events/validate.events";

import { isWarehouse } from "./../../../../Events/requests.events";
export const LoginForm = () => {
	const [submit, setSubmit] = useState(false);
	const navigate = useNavigate();

	const submitEvent = async (e) => {
		e.preventDefault();
		const data = Object.fromEntries(new FormData(e.target).entries());
		let validValues = Object.entries(data).every((val) => isEmpty(val[1]));

		if (validValues) {
			setSubmit(true);
			try {
				await isWarehouse(data);
				setSubmit(false);
				navigate(`/admin/${localStorage.recibemeWarehouseInfo}/seeRequests`, {
					replace: false,
				});
			} catch (e) {
				console.log(e);
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Los datos son incorrectos!",
				});
				setSubmit(false);
			}
		} else {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Los datos son incorrectos!",
			});
		}
	};

	return (
		<Form onSubmit={submitEvent}>
			<h4>administrador</h4>

			<InputRecibeme
				name="username"
				nameLabel="Usuario"
				required={true}
				type="text"
				autoComplete="new-password"
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
