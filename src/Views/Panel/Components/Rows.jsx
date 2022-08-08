import { Select, ButtonState } from "./Styles/Request.style";
import { useState } from "react";
import { Modal, ModalContent, CloseModal } from "./Styles/Modal";
import Swal from "sweetalert2";
import { updateRequest } from "./../../../Events/requests.events";

const deliveryStatusData = [
	{ code: 1000, status: "pending" },
	{ code: 1001, status: "send" },
	{ code: 1002, status: "delivered" },
	{ code: 1003, status: "delivered at terminal" },
];

export const Rows = ({ val, index }) => {
	const [showModal, setShowModal] = useState(false);

	const changeState = async (e) => {
		// console.log(e.target.value);
		console.log(val);

		try {
			await updateRequest({
				requestCode: val.request_code,
				id_delivery_status: e.target.value,
				cellphone: val.cellphone,
				param: {
					store_name: val.store_name,
					first_name: val.first_name,
					delivery_time: val.delivery_time,
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

	return (
		<>
			<tr>
				<td>{index + 1}</td>
				<td>{val.store_name}</td>
				<td>{val.first_name}</td>
				<td>{val.middle_name}</td>
				<td>{val.last_name}</td>
				<td>{val.address}</td>
				<td>{val.prefered_delivery_time}</td>
				<td>{val.delivery_time}</td>
				<td>{val.paymentStatus}</td>
				<td>{val.shippmentType}</td>
				<td>
					<Select
						onChange={changeState}
						defaultValue={
							deliveryStatusData.find((x) => x.status === val.deliveryStatus)
								.code
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
				</td>
				<td>
					<ButtonState
						onClick={() => {
							setShowModal(true);
						}}
					>
						Ver Items
					</ButtonState>
					<Modal show={showModal}>
						<ModalContent>
							Items
							<CloseModal
								onClick={() => {
									setShowModal(false);
								}}
							>
								X
							</CloseModal>
							<ul>
								{(JSON.parse(val.items) || []).map(
									({ name, code, description, quantity }, index) => {
										return (
											<li
												key={index}
											>{`${name}, ${code}, ${description}, ${quantity}`}</li>
										);
									}
								)}
							</ul>
						</ModalContent>
					</Modal>
				</td>
			</tr>
		</>
	);
};
