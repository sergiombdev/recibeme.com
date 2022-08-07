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
