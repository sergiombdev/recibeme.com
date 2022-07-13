const { Router } = require("express");
const api = Router();

api.use("/message", require("./routes/message.route"));

module.exports = api;
