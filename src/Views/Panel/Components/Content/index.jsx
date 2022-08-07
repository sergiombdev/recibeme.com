import { useEffect, useState } from "react";
import { Services } from "./Component/Services";
import Swal from "sweetalert2";
import {
	Container,
	Info,
	TokenInfo,
	SectionApi,
	FloatButton,
	FormReibeme,
} from "./Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { documentation } from "./documentation";

import { isHeader, isUrl } from "./../../../../Events/validate.events";
import { updateWebHookData } from "./../../../../Events/requests.events";

export const Content = ({
	name = "",
	token = "",
	confirmationUrl = "",
	confirmationHeaders = "",
}) => {
	const [showButton, setShowButton] = useState(false);

	let moveTopScroll = () => {
		window.scrollTo(0, 0);
	};

	let saveWebHook = async (e) => {
		e.preventDefault();
		const data = Object.fromEntries(new FormData(e.target).entries());

		const isCorrect = [true, true, true];

		try {
			if (data.url === "") {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Necesitamos la url de destino.",
				});
				isCorrect[0] = false;
			}
			if (!isUrl(data.url)) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "No es una url.",
				});
				isCorrect[1] = false;
			}
			if (data.headers !== "" && !isHeader(data.headers)) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "El formato de lo headers no es el correcto",
				});
				isCorrect[2] = false;
			}

			try {
				JSON.parse(`{ ${data.headers} }`);
			} catch (e) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "El formato de lo headers no es el correcto",
				});
				return;
			}

			if (isCorrect.every((x) => x)) {
				try {
					await updateWebHookData(data);
					Swal.fire({
						icon: "success",
						title: "Datos actualizados",
					});
				} catch (e) {
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: "El servidor se encuentra en mantenimiento.",
					});
				}
			}
		} catch (e) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "No deberias modificar el codigo.",
			});
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", (event) => {
			let top = window.pageYOffset || document.documentElement.scrollTop;
			setShowButton(top > 400 ? true : false);
		});
	}, [setShowButton]);

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
						<li>
							<p>
								webhook :
								<a
									href={`${window.location.origin}${window.location.pathname}#service-webhook`}
								>
									<b>estado de entrega.</b>
								</a>
							</p>
						</li>
					</ul>
				</Info>

				{documentation.map((data, index) => (
					<SectionApi key={index} id={`service-${index + 1}`}>
						<Info>
							<Services key={index} {...data} />
						</Info>
					</SectionApi>
				))}

				<Info id="service-webhook">
					<p>
						Recibe información del estado de entrega de tus productos con
						webhooks:
					</p>
					<FormReibeme onSubmit={saveWebHook}>
						<input
							name="url"
							type="text"
							placeholder="URL - ejemplo: https://example.com/webhook"
							required={true}
							defaultValue={confirmationUrl}
						/>

						<input
							name="headers"
							type="text"
							placeholder={`Headers - ejemplo: "my_header": "val", "my_header2": "val2", ...`}
							defaultValue={confirmationHeaders}
						/>

						<button>Guardar</button>

						<p>
							Recuerda que los datos que recibeme enviara seran por el metodo{" "}
							<b>POST</b>
						</p>

						<p>
							Respuesta: <br />
							<b>Code</b>: texto - codigo de la solicitud <br />
							<b>deliveryStatus</b>: texto - Estado de envio{" "}
						</p>
					</FormReibeme>
				</Info>
			</Container>
			<FloatButton show={showButton} onClick={moveTopScroll}>
				<span>
					<FontAwesomeIcon icon={["fa", "angle-up"]} />
				</span>
			</FloatButton>
		</>
	);
};
