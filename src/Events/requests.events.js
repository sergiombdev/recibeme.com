import { instance } from "./../config/axios.config";

export const isWarehouse = ({ username = "", password = "" }) =>
	new Promise((resolve, reject) => {
		instance({})
			.post("/auth/admin", { username, password })
			.then((response) => {
				localStorage.recibemeWarehouseToken = response.data.token;
				localStorage.recibemeWarehouseInfo = response.data.address
					.split(" ")
					.map((x) => x.charAt(0).toUpperCase() + x.slice(1))
					.join("");
				resolve(response);
			})
			.catch((e) => {
				reject(e.response);
			});
	});

export const infoWarehouse = () =>
	new Promise((resolve, reject) => {
		instance({
			api_key: localStorage.recibemeWarehouseToken || "",
		})
			.get("/warehouse/info")
			.then((response) => {
				localStorage.recibemeWarehouseToken = response.data.token;
				localStorage.recibemeWarehouseInfo = response.data.address
					.split(" ")
					.map((x) => x.charAt(0).toUpperCase() + x.slice(1))
					.join("");
				resolve(response);
			})
			.catch((e) => {
				reject(e.response);
			});
	});

export const updateRequest = (data) =>
	new Promise((resolve, reject) => {
		instance({
			api_key: localStorage.recibemeWarehouseToken || "",
		})
			.post("/warehouse/request/update", data)
			.then((response) => {
				resolve(response);
			})
			.catch((e) => {
				reject(e.response);
			});
	});
