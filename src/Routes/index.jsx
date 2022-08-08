import { BrowserRouter, Routes, Route } from "react-router-dom";

//views
import Login from "./../Views/Login";
import Panel from "./../Views/Panel";
import Error404 from "./../Views/404";

const Routers = () => (
	<BrowserRouter basename="/warehouse">
		<Routes>
			<Route exact path="/" element={<Login />} />
			<Route exact path="/admin/:userName/:option" element={<Panel />} />

			<Route path="*" element={<Error404 />} />
		</Routes>
	</BrowserRouter>
);

export default Routers;
