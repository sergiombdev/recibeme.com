const { Router } = require("express");
const router = Router();
const path = require('path');

router.post("/store", require(path.resolve(__dirname,"..","models","auth.model")).authStore);

module.exports = router;
