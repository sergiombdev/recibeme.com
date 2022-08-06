const { Router } = require("express");
const router = Router();

const path = require("path");

router.get(
	"/info",
	require(path.resolve(__dirname, "..", "models", "store.model")).infoStore
);

module.exports = router;
