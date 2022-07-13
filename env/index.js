const dotenv = require("dotenv");
const path = require('path');

dotenv.config({
	path: path.resolve(__dirname, './../env/' + '.env.' + process.env.ENVIRONMENT + ".local")
});

module.exports = process.env;