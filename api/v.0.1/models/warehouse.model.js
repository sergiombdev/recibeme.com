const path = require("path");
const { requestWarehouse, updateDeliveryStatus } = require(path.resolve(
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
		let { cellphone, param, ...data } = req.body;
		await updateDeliveryStatus(data);
		botWhatsApp(cellphone, parseInt(data.id_delivery_status), param);

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
