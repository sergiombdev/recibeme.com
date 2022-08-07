const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
	path: path.resolve(
		__dirname,
		"..",
		"env",
		".env." + process.env.ENVIRONMENT + ".local"
	),
});

// module.exports = process.env;
// module.exports = {
// 	version: "v.0.1",
// 	defaultPort: 8080,
// 	secret: "fb19ccd9-6fd9-4982-ba89-8828a3a983a0",

// 	host: "clinicadesaludonline.com",
// 	user: "eulvaran_sergio",
// 	password: "Yc!n8IyaLRgq",
// 	database: "eulvaran_RECIBEME",
// 	port_db: 3306,
// 	connectionLimit: 1,
// }
module.exports = {
	version: "v.0.1",
	defaultPort: 8080,
	secret: "fb19ccd9-6fd9-4982-ba89-8828a3a983a0",

	host: "db-mysql-recibeme-2024-do-user-12164890-0.b.db.ondigitalocean.com",
	user: "recibemeServer",
	password: "AVNS_MFXC_Epvyd1nneOIdyH",
	database: "recibemeDB",
	port_db: 25060,
	connectionLimit: 1,
};

// username = recibemeAdmin
// password = AVNS_JSXrld_-sDi3Civt6FN
// host = db-mysql-recibeme-2024-do-user-12164890-0.b.db.ondigitalocean.com
// port = 25060
// database = recibemeDB
// sslmode = REQUIRED
