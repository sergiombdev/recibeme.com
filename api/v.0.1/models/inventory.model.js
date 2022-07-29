const {
	stock,
	totalStock,
	deliveryDetails,
	deliveryTotal,
	stockInterval,
	deliveryInterval
} = require("./../controlers/inventory.controller");

const { isDate } = require("./../../../events/validate.format");

module.exports.stockStore = async (req, res) => {
	try {
		const data = await stock(req.infoStore);
		res.status(200).json(data);
	} catch ({ status = 500, message = "" }) {
		res.status(status).json({ message });
	}
};

module.exports.totalStockStore = async (req, res) => {
	try {
		const data = await totalStock(req.infoStore);
		res.status(200).json(data);
	} catch ({ status = 500, message = "" }) {
		res.status(status).json({ message });
	}
};

module.exports.allDeliveryDetails = async (req, res) => {
	try {
		const data = await deliveryDetails(req.infoStore);
		res.status(200).json(data);
	} catch ({ status = 500, message = "" }) {
		res.status(status).json({ message });
	}
};

module.exports.allDeliveryTotal = async (req, res) => {
	try {
		const data = await deliveryTotal(req.infoStore);
		res.status(200).json(data);
	} catch ({ status = 500, message = "" }) {
		res.status(status).json({ message });
	}
};

module.exports.totalStockStoreInterval = async (req, res) => {
	const validateDate = Object.entries(req.body).every((val) => isDate(val[1]));

	try {
		if (!validateDate) {
			return res.status(403).json({
				status: 403,
				message: "Date format error",
			});
		}

		const data = await stockInterval({
			...req.infoStore,
			...req.body,
		});

		res.status(200).json(data);

	} catch ({ status = 500, message = "" }) {
		res.status(status).json({ status, message });
	}
};


module.exports.allDeliveryInterval = async (req, res) => {
	const validateDate = Object.entries(req.body).every((val) => isDate(val[1]));

	try {
		if (!validateDate) {
			return res.status(403).json({
				status: 403,
				message: "Date format error",
			});
		}

		const data = await deliveryInterval({
			...req.infoStore,
			...req.body,
		});

		res.status(200).json(data);

	} catch ({ status = 500, message = "" }) {
		res.status(status).json({ status, message });
	}
};
