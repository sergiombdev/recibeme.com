const { Router } = require("express");

const path = require("path");
const { tokenAccess, tokenAccessWarehouse } = require(path.resolve(
	__dirname,
	"middelware",
	"token.middelware"
));

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

api.use(
	"/warehouse",
	tokenAccessWarehouse,
	require(path.resolve(__dirname, "routes", "warehouse.route"))
);

module.exports = api;
