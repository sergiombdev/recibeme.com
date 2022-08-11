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

router.post(
	"/request/update/deliveryTime",
	require(path.resolve(__dirname, "..", "models", "warehouse.model"))
		.updateDeliveryTimeModel
);

module.exports = router;
