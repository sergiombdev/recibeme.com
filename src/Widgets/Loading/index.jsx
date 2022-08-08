import { ContainerPage, Loader } from "./Styles";

const Loading = ({ message = "Cargando" }) => (
	<ContainerPage>
		<Loader></Loader>
	</ContainerPage>
);

export default Loading;
