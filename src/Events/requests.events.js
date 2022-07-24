import { instance } from "./../config/axios.config";

export const isStore = ({ username = "", password = "" }) =>
	new Promise((resolve, reject) => {
		instance({})
			.post("/auth/store", { username, password })
			.then((response) => {
				localStorage.recibemeStoreInfo = JSON.stringify(response.data);
				localStorage.recibemeStoreToken = response.data.token;
				resolve(response);
			}).catch(e=>{
				reject(e.response);
			});
	});
