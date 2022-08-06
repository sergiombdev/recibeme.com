const mysql = require("mysql");
const {
	host,
	user,
	password,
	database,
	port_db: port,
	connectionLimit,
} = require("./../env");

class RecibemeDB {
	constructor() {
		this.connection = mysql.createConnection({
			host,
			user,
			password,
			database,
			port,
			connectionLimit,
		});
		this.connection.connect();
	}

	getConnection() {
		return this.connection;
	}

	connectionClose() {
		this.connection.end();
	}
}

module.exports = { RecibemeDB };
