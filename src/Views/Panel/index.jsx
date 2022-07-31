import {
	ContainerPage,
	ContainerMenu,
	Content,
	Nav,
	Menu,
	Logo,
	ContainerLogo,
	ButtonAdmin,
	Options,
	ContainerInfoButton,
} from "./Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const optionsMenu = [
	{
		icon: ["fa", "boxes-stacked"],
		info: "Ver Inventario.",
		isShadow: false,
	},
	{
		icon: ["fa", "circle-plus"],
		info: "Añadir Items.",
		isShadow: false,
	},
	{
		icon: ["fa", "list-check"],
		info: "Ver solicitudes.",
		isShadow: false,
	},
];

const Panel = () => {
	return (
		<ContainerPage>
			<Nav>
				<ContainerLogo>
					<Logo></Logo>
				</ContainerLogo>
				<ContainerMenu>
					<Menu>
						<Options>
							{optionsMenu.map(({ icon, info, isShadow }, index) => (
								<ButtonAdmin key={index} isShadow={isShadow}>
									<span>
										<FontAwesomeIcon icon={icon} />
									</span>
									<ContainerInfoButton>
										{info}
									</ContainerInfoButton>
								</ButtonAdmin>
							))}
						</Options>
					</Menu>
				</ContainerMenu>
				<ButtonAdmin isShadow={false}>
					<span>
						<FontAwesomeIcon icon={["fa", "gear"]} />
					</span>
				</ButtonAdmin>
			</Nav>
			<Content>
				
			</Content>
		</ContainerPage>
	);
};

export default Panel;
