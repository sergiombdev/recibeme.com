const { Router } = require("express");
const router = Router();

router.get("/stock", require("./../models/inventory.model").stockStore);
router.get("/stock/total", require("./../models/inventory.model").totalStockStore);
router.post("/stock/filter", require("./../models/inventory.model").totalStockStoreInterval);

router.get("/deliverys", require("./../models/inventory.model").allDeliveryDetails);
router.get("/deliverys/total", require("./../models/inventory.model").allDeliveryTotal);
router.post("/deliverys/filter", require("./../models/inventory.model").allDeliveryInterval);


module.exports = router;
