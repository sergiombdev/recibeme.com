const { Router } = require("express");
const router = Router();

router.post("/store", require("./../models/auth.model").authStore);

module.exports = router;
