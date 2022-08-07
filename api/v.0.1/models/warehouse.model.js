const path = require("path");
const { loadItems } = require(path.resolve(
	__dirname,
	"..",
	"controlers",
	"warehouse.controler.js"
));

module.exports.saveItems = (req, res) => {
	const { id_warehouse } = req.infoWarehouse;
	const { storeName = false, items = [] } = req.body;
};
