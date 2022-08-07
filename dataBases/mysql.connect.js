const path = require("path");
const mysql = require("mysql");
const fs = require("fs");

const {
	host,
	user,
	password,
	database,
	port_db: port,
	connectionLimit,
} = require(path.resolve(__dirname, "..", "env"));

class RecibemeDB {
	constructor() {
		this.connection = mysql.createConnection({
			host,
			user,
			password,
			database,
			port,
			connectionLimit,
			ssl: {
				ca: fs.readFileSync(__dirname + "/ca-certificate.crt"),
			},
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
