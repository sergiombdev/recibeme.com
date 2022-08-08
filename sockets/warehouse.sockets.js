const path = require("path");
const { socketsEvents } = require(path.resolve(
	__dirname,
	"..",
	"api",
	"v.0.1",
	"models",
	"warehouse.model"
));
const { isTokenWarehouse } = require(path.resolve(
	__dirname,
	"..",
	"api",
	"v.0.1",
	"controlers",
	"token.controller"
));

let io = null;

const ioInit = (server) => {
	io = require("socket.io")(server, {
		cors: {
			allowedHeaders: ["api_key"],
		},
	});
};

//sockets

const { loadRequests } = socketsEvents();

const startWarehouseSockets = () => {
	io.on("connection", async (socket) => {
		try {
			await isTokenWarehouse(socket.handshake.headers.api_key);

			const result = await loadRequests(socket);

			socket.emit(`requests:${socket.handshake.headers.api_key}`, result);
		} catch (e) {
			socket.disconnect();
		}
	});
};

const emitRequestData = (from, data) => {
	console.log(`requests:${from}`, data);
	io.emit(`requests:${from}`, data);
};

module.exports = { ioInit, io, startWarehouseSockets, emitRequestData };
