import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { infoWarehouse } from "./../../Events/requests.events";
import Loading from "./../../Widgets/Loading";

import {
	ContainerPage,
	ContainerMenu,
	Content,
	Header,
	Tittle,
	User,
	Activity,
	Nav,
	Menu,
	Logo,
	ContainerLogo,
	ButtonAdmin,
	Options,
	ContainerInfoButton,
} from "./Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Request from "./Components/Requests";
import Items from "./Components/Items";
import Inventory from "./Components/Inventory";

const optionsMenu = [
	{
		icon: ["fa", "boxes-stacked"],
		info: "Ver Inventario.",
		isShadow: false,
		path: "seeInventory",
		Component: Inventory,
	},
	{
		icon: ["fa", "circle-plus"],
		info: "Añadir Items.",
		isShadow: false,
		path: "addItems",
		Component: Items,
	},
	{
		icon: ["fa", "list-check"],
		info: "Ver solicitudes.",
		isShadow: false,
		path: "seeRequests",
		Component: Request,
	},
];

const Panel = () => {
	const [isLoading, setLoading] = useState(true);

	const navigate = useNavigate();
	const { option, userName } = useParams();

	const goOption = (path) => {
		navigate(`/admin/${userName}/${path}`, { replace: false });
	};

	const closeSession = () => {
		if (window.confirm("Seguro que quieres salir?")) {
			localStorage.clear();
			navigate("/", { replace: true });
		}
	};

	useEffect(() => {
		const verifyToken = async () => {
			try {
				await infoWarehouse();
				// navigate(`/admin/${localStorage.recibemeWarehouseInfo}/seeRequests`, {
				// 	replace: false,
				// });
				setLoading(false);
			} catch (e) {
				localStorage.clear();
				navigate("/", { replace: true });
			}
		};
		verifyToken();
	}, [navigate]);

	return isLoading ? (
		<Loading />
	) : (
		<ContainerPage>
			<Nav>
				<ContainerLogo>
					<Logo></Logo>
				</ContainerLogo>
				<ContainerMenu>
					<Menu>
						<Options>
							{optionsMenu.map(({ icon, info, isShadow, path }, index) => (
								<ButtonAdmin
									key={index}
									isShadow={isShadow}
									onClick={() => goOption(path)}
								>
									<span>
										<FontAwesomeIcon icon={icon} />
									</span>
									<ContainerInfoButton>{info}</ContainerInfoButton>
								</ButtonAdmin>
							))}
						</Options>
					</Menu>
				</ContainerMenu>

				<ButtonAdmin isShadow={true}>
					<span>
						<FontAwesomeIcon icon={["fa", "gear"]} />
					</span>
				</ButtonAdmin>
			</Nav>
			<Content>
				<Header>
					{optionsMenu.filter(({ path }) => path === option).length === 0 ? (
						<Tittle>
							<FontAwesomeIcon icon={["fa", "circle-info"]} /> &nbsp; Ruta no
							encontrada.
						</Tittle>
					) : (
						""
					)}
					{optionsMenu
						.filter(({ path }) => path === option)
						.map(({ icon, info }, index) => (
							<Tittle key={index}>
								<FontAwesomeIcon icon={icon} /> &nbsp;
								{info}
							</Tittle>
						))}
					<User>
						<ButtonAdmin isShadow={true} onClick={closeSession}>
							<span>
								<FontAwesomeIcon icon={["fa", "door-closed"]} />
							</span>
						</ButtonAdmin>
					</User>
				</Header>

				<Activity>
					{optionsMenu
						.filter(({ path }) => path === option)
						.map(({ Component }, index) => (
							<Component key={index}></Component>
						))}
				</Activity>
			</Content>
		</ContainerPage>
	);
};

export default Panel;
