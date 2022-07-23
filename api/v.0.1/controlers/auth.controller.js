const { RecibemeDB } = require("./../../../dataBases/mysql.connect");
const { generateToken, decodeToken } = require("./../../../events/token.events");

module.exports.login = ({ username = "", password = "" }) => {
	const connectionStart = new RecibemeDB();
	const connect = connectionStart.getConnection();
	const query = `call authStore("${username}","${password}","${
		generateToken({username,password,timeStamp:+new Date()})
	}");`;

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

			resolve( data[0] );
		});
	});
};
