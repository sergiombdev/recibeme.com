const { Router } = require("express");
const { tokenAccess } = require("./middelware/token.middelware");

const path = require("path");

const api = Router();

api.use("/auth", require(path.resolve(__dirname, "routes", "auth.route")));
api.use(
	"/inventory",
	tokenAccess,
	require(path.resolve(__dirname, "routes", "inventory.route"))
);
api.use(
	"/store",
	tokenAccess,
	require(path.resolve(__dirname, "routes", "store.route"))
);

module.exports = api;
