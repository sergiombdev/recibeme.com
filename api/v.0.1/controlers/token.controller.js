const path = require("path");

const { RecibemeDB } = require(path.resolve(
	__dirname,
	"..",
	"..",
	"..",
	"dataBases",
	"mysql.connect"
));

module.exports.isToken = (token) => {
	const connectionStart = new RecibemeDB();
	const connect = connectionStart.getConnection();
	const query = `call tokenVerification("${token}");`;

	return new Promise((resolve, reject) => {
		connect.query(query, (error, result, fields) => {
			connectionStart.connectionClose();

			let data = result ? result[0] : [];

			if (error)
				reject({
					status: 500,
					message: "Internal server error.",
				});

			if (data.length === 0)
				reject({
					status: 403,
					message: "Access denied.",
				});

			resolve(data[0]);
		});
	});
};
