const { Router } = require("express");
const router = Router();
const path = require("path");

router.post(
	"/store",
	require(path.resolve(__dirname, "..", "models", "auth.model")).authStore
);

router.post(
	"/admin",
	require(path.resolve(__dirname, "..", "models", "auth.model")).authWarehouse
);

module.exports = router;
