const jwt = require("jwt-simple");
const { secret } = require("./../env");

module.exports.generateToken = (data) => jwt.encode(data, secret);

module.exports.decodeToken = (token) => jwt.decode(token, secret);
