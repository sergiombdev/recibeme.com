import { useRef, useState } from "react";

import {
	Card,
	DataCard,
	Image,
	InfoData,
	Select,
	Button,
} from "./Styles/Card.style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import {
	updateRequest,
	updateRequestDeliveryTime,
} from "./../../../Events/requests.events";

import { Modal, ModalContent, CloseModal } from "./Styles/Modal";

const deliveryStatusData = [
	{ code: 1000, status: "pending" },
	{ code: 1001, status: "send" },
	{ code: 1002, status: "delivered" },
	{ code: 1003, status: "delivered at terminal" },
];

export const CardComponent = ({ data, setShowOverflow }) => {
	const {
		store_name,
		request_code,
		first_name,
		middle_name,
		last_name,
		address,
		cellphone,
		cityName,
		deliveryStatus,
		shippmentType,
		delivery_time,
		prefered_delivery_time,
		full_date,
		...val
	} = data;
	console.log(data);

	const [showModal, setShowModal] = useState(false);
	const deliveryDateInput = useRef();

	// console.log(data);
	const changeState = async (e) => {
		//console.log(e.target.value);
		try {
			await updateRequest({
				requestCode: data.request_code,
				id_delivery_status: e.target.value,
				cellphone: data.cellphone,
				confirmationHeaders: data.confirmationHeaders || null,
				confirmationUrl: data.confirmationUrl || null,
				param: {
					store_name: store_name,
					first_name: first_name,
					delivery_time: data.delivery_time,
				},
			});
			Swal.fire({
				icon: "success",
				title: "Actualizado con exito",
			});
		} catch (e) {
			Swal.fire({
				icon: "error",
				title: "Error 500.",
			});
		}
	};

	const NumberDelivery =
		deliveryStatus === "pending"
			? 1
			: deliveryStatus === "send"
			? 2
			: deliveryStatus === "delivered"
			? 3
			: 1;

	const buttonUpdateDeliveryDate = async () => {
		// updateRequestDeliveryTime()

		try {
			if (deliveryDateInput.current.value !== "") {
				await updateRequestDeliveryTime({
					requestCode: data.request_code,
					deliveryTime: deliveryDateInput.current.value.replaceAll("T", " "),
				});
				Swal.fire({
					icon: "success",
					title: "Tiempo de envio actualizada con exito",
				});
			}
		} catch (e) {
			Swal.fire({
				icon: "error",
				title: "Error 500.",
			});
		}
	};

	return (
		<Card>
			<DataCard>
				<p>
					{cityName}
					<br />
					{new Date(full_date).toLocaleDateString()}
				</p>
				<InfoData>
					<label>Código de Solicitud:</label>
					<p>{request_code}</p>
				</InfoData>
				<InfoData>
					<label>Nombre Tienda:</label>
					<p>{store_name}</p>
				</InfoData>

				<InfoData>
					<label>Dirección:</label>
					<p>{address}</p>
				</InfoData>
				<InfoData>
					<label>Estado de envío:</label>
					<p>{deliveryStatus}</p>
				</InfoData>
				<Button
					onClick={() => {
						setShowModal(true);
						setShowOverflow(false);
					}}
				>
					Ver mas.
				</Button>

				<Modal show={showModal}>
					<ModalContent>
						<CloseModal
							onClick={() => {
								setShowModal(false);
								setShowOverflow(true);
							}}
						>
							<span>
								<FontAwesomeIcon icon={["fa", "xmark"]} />
							</span>
						</CloseModal>

						<p>Datos Solicitud</p>
						<InfoData>
							<label>Código de Solicitud:</label>
							<p>{request_code}</p>
						</InfoData>
						<InfoData>
							<label>Nombre Tienda:</label>
							<p>{store_name}</p>
						</InfoData>
						<InfoData>
							<label>Ciudad de envío:</label>
							<p>{cityName}</p>
						</InfoData>
						<InfoData>
							<label>Nombre Cliente</label>
							<p>{first_name + " " + middle_name + " " + last_name}</p>
						</InfoData>
						<InfoData>
							<label>Celular:</label>
							<p>{cellphone}</p>
						</InfoData>
						<InfoData>
							<label>Dirección:</label>
							<p>{address}</p>
						</InfoData>
						<InfoData>
							<label> Fecha y Hora de preferencia de envío:</label>
							<p>{new Date(prefered_delivery_time).toLocaleString()}</p>
						</InfoData>
						<InfoData>
							<label>Fecha y hora de envío:</label>
							<input
								ref={deliveryDateInput}
								type="datetime-local"
								name="deliveryTime"
								defaultValue={new Date(delivery_time)
									.toISOString()
									.replaceAll("Z", "")}
								min={new Date().toISOString().replaceAll("Z", "")}
							/>
							<Button onClick={buttonUpdateDeliveryDate}>
								Guardar cambios.
							</Button>
						</InfoData>
						<InfoData>
							<label>Estado de envío:</label>
							<p>
								<Select
									onChange={changeState}
									defaultValue={
										deliveryStatusData.find(
											(x) => x.status === data.deliveryStatus
										).code
									}
								>
									<option value="" hidden>
										Type
									</option>
									<option value="1000">Pendiente </option>
									<option value="1001">Enviado</option>
									<option value="1002">Entregado</option>
									<option value="1003">Entregado en terminal</option>
								</Select>
							</p>
						</InfoData>
						<InfoData>
							<label>Driver:</label>
							<p></p>
						</InfoData>
						<InfoData>
							<label>Tipo de envío:</label>
							<p>{shippmentType}</p>
						</InfoData>
						<InfoData>
							<label>Items:</label>
							<table>
								<thead>
									<tr>
										<th>Nombre</th>
										<th>Código</th>
										<th>Descripción</th>
										<th>Cantidad</th>
									</tr>
								</thead>
								<tbody>
									{(JSON.parse(val.items) || []).map(
										({ name, code, description, quantity }, index) => (
											<tr key={index}>
												<td>{name}</td>
												<td>{code}</td>
												<td>{description}</td>
												<td>{quantity}</td>
											</tr>
										)
									)}
								</tbody>
							</table>
						</InfoData>
					</ModalContent>
				</Modal>
			</DataCard>
			<Image data={NumberDelivery}></Image>
		</Card>
	);
};
