import { instance } from "./../config/axios.config";

export const isStore = ({ username = "", password = "" }) =>
	new Promise((resolve, reject) => {
		instance({})
			.post("/auth/store", { username, password })
			.then((response) => {
				localStorage.recibemeStoreToken = response.data.token;
				localStorage.recibemeStoreInfo = response.data.name
					.split(" ")
					.map((x) => x.charAt(0).toUpperCase() + x.slice(1))
					.join("");
				resolve(response);
			})
			.catch((e) => {
				reject(e.response);
			});
	});

export const infoStore = () =>
	new Promise((resolve, reject) => {
		instance({
			api_key: localStorage.recibemeStoreToken || "",
		})
			.get("/store/info")
			.then((response) => {
				localStorage.recibemeStoreToken = response.data.token;
				localStorage.recibemeStoreInfo = response.data.name
					.split(" ")
					.map((x) => x.charAt(0).toUpperCase() + x.slice(1))
					.join("");
				resolve(response);
			})
			.catch((e) => {
				reject(e.response);
			});
	});

export const updateWebHookData = (data) =>
	new Promise((resolve, reject) => {
		instance({
			api_key: localStorage.recibemeStoreToken || "",
		})
			.post("/store/config/hook", data)
			.then((response) => {
				resolve(response);
			})
			.catch((e) => {
				reject(e.response);
			});
	});
