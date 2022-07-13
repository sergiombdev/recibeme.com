const { Router } = require("express");
const router = Router();

router.get("/", require("./../models/message.model").hello);

module.exports = router;
