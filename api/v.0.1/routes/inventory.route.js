const { Router } = require("express");
const router = Router();

router.get("/stock", require("./../models/inventory.model").stockStore);

module.exports = router;
