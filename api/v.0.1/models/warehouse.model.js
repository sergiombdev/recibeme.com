const path = require("path");
const request = require("request");

const {
	requestWarehouse,
	updateDeliveryTime,
	updateDeliveryStatus,
} = require(path.resolve(
	__dirname,
	"..",
	"controlers",
	"warehouse.controller"
));

const { botWhatsApp } = require("./../../../events/bot_w.evets");
module.exports.infoWarehouse = async (req, res) => {
	res.status(200).json(req.infoWarehouse);
};

module.exports.updateDeliveryStatusModel = async (req, res) => {
	try {
		let { cellphone, param, confirmationHeaders, confirmationUrl, ...data } =
			req.body;
		console.log(req.body);

		await updateDeliveryStatus(data);

		botWhatsApp(cellphone, parseInt(data.id_delivery_status), param);

		const dataRequest = await requestWarehouse(req.infoWarehouse.token);
		emitRequestData(req.infoWarehouse.token, dataRequest);

		try {
			let delivery_status = "";

			if (data.id_delivery_status === 1001) {
				delivery_status = "status_preparado";
			} else if (data.id_delivery_status === 1002) {
				delivery_status = "status_entregado";
			} else {
				delivery_status = "status_terminal_entregado";
			}

			request(
				{
					url: confirmationUrl,
					headers: {
						"content-type": "application/json",
						...JSON.parse("{" + (confirmationHeaders || "") + "}"),
					},
					method: "POST",
					body: JSON.stringify({
						code: data.requestCode,
						deliveryStatus: delivery_status,
					}),
				},
				(error, body) => {
					if (error) console.log(error);
					console.log(body);
				}
			);
		} catch (e) {
			console.log(e);
		}

		res.status(200).json({ status: 200 });
	} catch ({ status = 403, message = "" }) {
		res.status(403).json({ status, message });
	}
};

module.exports.updateDeliveryTimeModel = async (req, res) => {
	try {
		let data = req.body;
		await updateDeliveryTime(data);

		const dataRequest = await requestWarehouse(req.infoWarehouse.token);
		emitRequestData(req.infoWarehouse.token, dataRequest);

		res.status(200).json({ status: 200 });
	} catch ({ status = 403, message = "" }) {
		res.status(403).json({ status, message });
	}
};

module.exports.socketsEvents = () => ({
	loadRequests: async (socket) => {
		const result = await requestWarehouse(socket.handshake.headers.api_key);
		socket.emit(`requests:${socket.handshake.headers.api_key}`, result);
	},
});

// const { authStore } = require(path.resolve(
// 	__dirname,
// 	"..",
// 	"controlers",
// 	"auth.controller"
// ));
// const { loadItems } = require(path.resolve(
// 	__dirname,
// 	"..",
// 	"controlers",
// 	"warehouse.controler.js"
// ));

// module.exports.saveItems = (req, res) => {
// 	try {
// 		const data = await authStore(req.body);
// 		res.status(200).json(data);
// 	} catch ({ status = 500, message = "" }) {
// 		res.status(status).json({ message });
// 	}
// };
