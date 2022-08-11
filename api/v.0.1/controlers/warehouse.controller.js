const path = require("path");
const { RecibemeDB } = require(path.resolve(
	__dirname,
	"..",
	"..",
	"..",
	"dataBases",
	"mysql.connect"
));

//function load items warehouse
module.exports.loadItems = (data) => {
	const connectionStart = new RecibemeDB();
	const connect = connectionStart.getConnection();

	const query = `call loadItems('${JSON.stringify(data)}');`;

	return new Promise((resolve, reject) => {
		connect.query(query, (error, result, fields) => {
			connectionStart.connectionClose();

			let data = result ? result : [];

			if (error)
				reject({
					status: 500,
					message: "Internal server error.",
				});

			resolve(data[0] ? data[0] : []);
		});
	});
};

module.exports.requestWarehouse = (token) => {
	const connectionStart = new RecibemeDB();
	const connect = connectionStart.getConnection();

	const query = `select * from requestWarehouse where token = '${token}';`;

	return new Promise((resolve, reject) => {
		connect.query(query, (error, result, fields) => {
			connectionStart.connectionClose();

			let data = result ? result : [];

			if (error)
				reject({
					status: 500,
					message: "Internal server error.",
				});

			resolve(data ? data : []);
		});
	});
};
// select token from requestWarehouse where request_code = 'SomeCode5';

module.exports.wareHouseToken = (codeRequest) => {
	const connectionStart = new RecibemeDB();
	const connect = connectionStart.getConnection();

	const query = `select token from requestWarehouse where request_code = '${codeRequest}';`;

	return new Promise((resolve, reject) => {
		connect.query(query, (error, result, fields) => {
			connectionStart.connectionClose();

			let data = result ? result : [];

			if (error)
				reject({
					status: 500,
					message: "Internal server error.",
				});

			resolve(data[0] ? data[0] : []);
		});
	});
};

module.exports.updateDeliveryStatus = ({ requestCode, id_delivery_status }) => {
	const connectionStart = new RecibemeDB();
	const connect = connectionStart.getConnection();
	const query = `UPDATE Request SET id_delivery_status = ${id_delivery_status} WHERE request_code = '${requestCode}';`;
	console.log(query);
	return new Promise((resolve, reject) => {
		connect.query(query, (error, result, fields) => {
			connectionStart.connectionClose();

			let data = result ? result : [];

			if (error)
				reject({
					status: 500,
					message: "Internal server error.",
				});

			resolve(data[0] ? data[0] : []);
		});
	});
};

module.exports.updateDeliveryTime = ({ requestCode, deliveryTime }) => {
	const connectionStart = new RecibemeDB();
	const connect = connectionStart.getConnection();
	const query = `UPDATE Request SET delivery_time = '${deliveryTime}' WHERE request_code = '${requestCode}';`;

	console.log(query);

	return new Promise((resolve, reject) => {
		connect.query(query, (error, result, fields) => {
			connectionStart.connectionClose();

			let data = result ? result : [];

			if (error)
				reject({
					status: 500,
					message: "Internal server error.",
				});

			resolve(data[0] ? data[0] : []);
		});
	});
};
