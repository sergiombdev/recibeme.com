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
	Line,
	ContainerLogo,
	ButtonAdmin,
	ButtonOption,
	ButtonTop,
	Options,
	ContainerInfoButton,
	ContainerInfoOption,
	ContainerInfoTop,
} from "./Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonAnimated, LinkAnimated } from './../../Themes/Buttons.style';


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
				<ButtonOption isShadow={true}>
					<span>
						<FontAwesomeIcon icon={["fa", "gear"]} />
					</span>
					<ContainerInfoOption>
						<span>
							<LinkAnimated>
								Activar Notificaciones
							</LinkAnimated>
						</span>
					</ContainerInfoOption>
				</ButtonOption>
			</Nav>
			<Content>
				<Header>
					<Tittle>
						Administrador
					</Tittle>
					<User>
						<ButtonTop isShadow={true}>
							<span>
								<FontAwesomeIcon icon={["fa", "bell"]} />
							</span>
							<ContainerInfoTop>
								<span>
									Test
								</span>
							</ContainerInfoTop>
						</ButtonTop>
						<ButtonTop isShadow={true}>
							<span>
								<FontAwesomeIcon icon={["fa", "user"]} />
							</span>
							<ContainerInfoTop>
								<span>
									<LinkAnimated>
										Cerrar sesión
									</LinkAnimated>
								</span>
							</ContainerInfoTop>
						</ButtonTop>
					</User>

				</Header>
				
				<Activity>
					
				</Activity>
			</Content>
		</ContainerPage>
	);
};

export default Panel;
