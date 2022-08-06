const { Router } = require("express");
const router = Router();
const path = require("path");

router.get(
	"/stock",
	require(path.resolve(__dirname, "..", "models", "inventory.model")).stockStore
);
router.get(
	"/stock/total",
	require(path.resolve(__dirname, "..", "models", "inventory.model"))
		.totalStockStore
);
router.post(
	"/stock/filter",
	require(path.resolve(__dirname, "..", "models", "inventory.model"))
		.totalStockStoreInterval
);

router.get(
	"/deliverys",
	require(path.resolve(__dirname, "..", "models", "inventory.model"))
		.allDeliveryDetails
);
router.get(
	"/deliverys/total",
	require(path.resolve(__dirname, "..", "models", "inventory.model"))
		.allDeliveryTotal
);
router.post(
	"/deliverys/filter",
	require(path.resolve(__dirname, "..", "models", "inventory.model"))
		.allDeliveryInterval
);

router.post(
	"/request/send",
	require(path.resolve(__dirname, "..", "models", "inventory.model"))
		.sendRequest
);

module.exports = router;
