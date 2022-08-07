const { Router } = require("express");
const router = Router();

const path = require("path");

router.get(
	"/info",
	require(path.resolve(__dirname, "..", "models", "store.model")).infoStore
);

router.post(
	"/config/hook",
	require(path.resolve(__dirname, "..", "models", "store.model"))
		.updateWebHookModel
);

module.exports = router;
