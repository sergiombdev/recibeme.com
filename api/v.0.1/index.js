const { Router } = require("express");
const { tokenAccess } = require('./middelware/token.middelware');


const api = Router();

api.use("/auth", require("./routes/auth.route"));
api.use("/inventory", tokenAccess, require("./routes/inventory.route"));

api.use("/store", tokenAccess, require('./routes/store.route'));

module.exports = api;
