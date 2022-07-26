const { RecibemeDB } = require("./../../../dataBases/mysql.connect");

module.exports.stock = ( { id_store = 0 } ) => {
	const connectionStart = new RecibemeDB();
	const connect = connectionStart.getConnection();
	const query = `call stockInventory("${ id_store }");`;

	return new Promise((resolve, reject) => {
		connect.query(query, (error, result, fields) => {
			connectionStart.connectionClose();

			let data = result ? result : [];

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
