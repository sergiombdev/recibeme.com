const { stock } = require("./../controlers/inventory.controller");

module.exports.stockStore = async (req, res) => {
	try {
		const data = await stock( req.infoStore );
		res.status(200).json(data);
	} catch ({ status = 500, message = "" }) {
		res.status(status).json({ message });
	}
};
