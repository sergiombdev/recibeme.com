import {
	ContainerPage,
	ContainerCard,
	OptionInput,
	ContainerOptions,
	ContainerFilterDate,
} from "./Styles/Request.style";

import socketIOClient from "socket.io-client";
import NotificationSound from "./../../../sources/audio/ding.mp3";
import { data } from "./../../../config/host.config";
import { useEffect, useState, useRef } from "react";
import { CardComponent } from "./Card";

const Request = () => {
	const audioPlayer = useRef(null);
	const [dataRequest, setDataRequest] = useState([]);
	const [showOverflow, setShowOverflow] = useState(true);
	const [valSearch, setValSearch] = useState("");

	const [filterDateStart, setfilterDateStart] = useState("");
	const [filterDateEnd, setfilterDateEnd] = useState("");

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

	const SearchEvent = (e) => {
		setValSearch(e.target.value);
	};
	const filterDateStartEvent = (e) => {
		setfilterDateStart(e.target.value);
	};
	const filterDateEndEvent = (e) => {
		setfilterDateEnd(e.target.value);
	};

	return (
		<ContainerPage>
			<ContainerOptions>
				<OptionInput
					type="search"
					placeholder="Buscar por tienda, codigo, nombre destino o estado de envio."
					onKeyUp={SearchEvent}
				/>
				<ContainerFilterDate>
					<OptionInput type="date" onChange={filterDateStartEvent} />
					<OptionInput type="date" onChange={filterDateEndEvent} />
				</ContainerFilterDate>
			</ContainerOptions>
			<ContainerCard show={showOverflow}>
				{(dataRequest || []).map((val) => {
					const {
						request_code,
						store_name,
						first_name,
						last_name,
						deliveryStatus,
						full_date,
					} = val;

					if (valSearch === "") {
						if (filterDateStart !== "") {
							if (filterDateEnd !== "") {
								if (
									new Date(full_date.split("T")[0]) >=
										new Date(filterDateStart) &&
									new Date(full_date.split("T")[0]) <= new Date(filterDateEnd)
								) {
									return (
										<CardComponent
											key={val.request_code}
											data={val}
											setShowOverflow={setShowOverflow}
										/>
									);
								} else return null;
							} else {
								if (
									new Date(full_date.split("T")[0]) >= new Date(filterDateStart)
								) {
									return (
										<CardComponent
											key={val.request_code}
											data={val}
											setShowOverflow={setShowOverflow}
										/>
									);
								} else return null;
							}
						} else {
							return (
								<CardComponent
									key={val.request_code}
									data={val}
									setShowOverflow={setShowOverflow}
								/>
							);
						}
					} else if (
						deliveryStatus.includes(valSearch) ||
						request_code.includes(valSearch) ||
						store_name.includes(valSearch) ||
						first_name.includes(valSearch) ||
						last_name.includes(valSearch)
					) {
						if (filterDateStart !== "") {
							if (filterDateEnd !== "") {
								if (
									new Date(full_date.split("T")[0]) >=
										new Date(filterDateStart) &&
									new Date(full_date.split("T")[0]) <= new Date(filterDateEnd)
								) {
									return (
										<CardComponent
											key={val.request_code}
											data={val}
											setShowOverflow={setShowOverflow}
										/>
									);
								} else return null;
							} else {
								if (
									new Date(full_date.split("T")[0]) >= new Date(filterDateStart)
								) {
									return (
										<CardComponent
											key={val.request_code}
											data={val}
											setShowOverflow={setShowOverflow}
										/>
									);
								} else return null;
							}
						} else {
							return (
								<CardComponent
									key={val.request_code}
									data={val}
									setShowOverflow={setShowOverflow}
								/>
							);
						}
					} else return null;
				})}
			</ContainerCard>

			<audio ref={audioPlayer} src={NotificationSound} />
		</ContainerPage>
	);
};

export default Request;
