const { Router } = require("express");
const router = Router();

router.get("/info", require("./../models/store.model").infoStore);

module.exports = router;
