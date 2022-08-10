import {
	ContainerPage,
	ContainerTable,
	StyledTable,
	ContainerScrollTable,
	ContainerCard,
	Search
} from "./Styles/Request.style";
import { Rows } from "./Rows";
// import { dataTable } from "./db";

import socketIOClient from "socket.io-client";
import NotificationSound from "./../../../sources/audio/ding.mp3";
import { data } from "./../../../config/host.config";
import { useEffect, useState, useRef } from "react";
import {CardComponent} from "./Card";

const Request = () => {
	const audioPlayer = useRef(null);
	const [dataRequest, setDataRequest] = useState([]);
	const [showOverflow, setShowOverflow] = useState(true);
	const playAudio = () => {
		audioPlayer.current.play();
	};
	useEffect(() => {
		const socket = socketIOClient(data.host, {
			extraHeaders: {
				api_key: localStorage.recibemeWarehouseToken || "",
			},
		});
		socket.on(`requests:${localStorage.recibemeWarehouseToken}`, (data) => {
			if (data) {
				setDataRequest(data.reverse());
				playAudio();
			}
		});
	}, []);

	// console.log(dataRequest);

	return (
		<ContainerPage>
			<Search placeholder="Buscar"/>
			<ContainerCard show={showOverflow}>

				{
					(dataRequest||[]).map(val=> <CardComponent key={val.request_code} data={val} setShowOverflow={setShowOverflow}/>				)
				}
				
			</ContainerCard>

			{/*<ContainerTable>
				<ContainerScrollTable>
					<StyledTable>
						<thead>
							<tr>
								<th>#</th>
								<th>Nombre Tienda</th>
								<th>Primer nombre</th>
								<th>Segundo nombre</th>
								<th>Apellido</th>
								<th>Celular</th>
								<th>Dirección</th>
								<th>Fecha y hora de preferencia de envío</th>
								<th>Fecha y hora de Envío</th>
								<th>Estado de pago</th>
								<th>Driver</th>
								<th>Tipo de envío</th>
								<th>Estado del envío</th>
								<th>Items</th>
							</tr>
						</thead>
						<tbody>
							{(dataRequest || []).map((val, index) => (
								<Rows key={index} index={index} val={val} />
							))}
						</tbody>
					</StyledTable>
				</ContainerScrollTable>
			</ContainerTable>*/}




			<audio ref={audioPlayer} src={NotificationSound} />
		</ContainerPage>
	);
};

export default Request;
