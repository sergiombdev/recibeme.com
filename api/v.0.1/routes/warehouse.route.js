const { Router } = require("express");
const router = Router();

const path = require("path");

router.get(
	"/info",
	require(path.resolve(__dirname, "..", "models", "warehouse.model"))
		.infoWarehouse
);

router.post(
	"/request/update",
	require(path.resolve(__dirname, "..", "models", "warehouse.model"))
		.updateDeliveryStatusModel
);

module.exports = router;
