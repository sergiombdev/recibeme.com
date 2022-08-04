const jwt = require("jwt-simple");
const path = require('path');

const { secret } = require( path.resolve(__dirname,"..","env"));

module.exports.generateToken = (data) => jwt.encode(data, secret);

module.exports.decodeToken = (token) => jwt.decode(token, secret);
