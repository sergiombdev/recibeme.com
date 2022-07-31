const {
	stock,
	totalStock,
	deliveryDetails,
	deliveryTotal,
	stockInterval,
	deliveryInterval,
	newRequest
} = require("./../controlers/inventory.controller");

const { v4: uuid } = require('uuid');

const { isDate, isCellphone, isEmail,isEmpty } = require("./../../../events/validate.format");

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

module.exports.sendRequest = async(req, res) => {
	const { id_store: storeID } = req.infoStore;
	const {
		lng = "",
		lat = "",
		preferedDeliveryTime = new Date().toLocaleDateString(),
		prime = false,
		clientEmail = "empty@example.com",
		shippmentType = "regular",
		middleName = "",
		firstName = false,
		lastName = false,
		address = false,
		city = false,
		state = false,
		country = false,
		paymentStatus = false,
		clientCellphone = false,
		items = []
	} = req.body;

	const automatizedData = {
		fullDate: new Date().toLocaleDateString(),
		deliveryStatus: "pending",
		requestCode: uuid(),
	};

	const isValidData =
		firstName &&
		lastName &&
		address &&
		city &&
		state &&
		country &&
		paymentStatus &&
		clientCellphone &&
		items
			? true
			: false;

	if (!isValidData)
		return res
			.status(403)
			.json({
				status: 403,
				message: `Please send all the required data: firstName,lastName ,address ,city ,state ,country ,paymentStatus,,clientCellphone ,items.`,
			});

	if ((items.length === 0))
		return res
			.status(403)
			.json({
				status: 403,
				message: `We need to know what products to send. The items field is required`,
			});

	let dates = { preferedDeliveryTime };
	let strings = {
		firstName,
		lastName,
		address,
		city,
		state,
		country,
		paymentStatus,
		shippmentType,
	};


	let emails = { clientEmail };
	let cellPhone = { clientCellphone };

	const validateDate = Object.entries(dates).every((val) => isDate(val[1]));
	const validateStrings = Object.entries(strings).every((val) => isEmpty(val[1]));
	const validateEmail = Object.entries(emails).every((val) => isEmail(val[1]));
	const validateCellPhone = Object.entries(cellPhone).every((val) =>
		isCellphone(val[1]),
	);

	if (!validateDate)
		return res
			.status(403)
			.json({ status: 403, message: "Check the format of preferredDeliveryTime." });
	if (!validateStrings)
		return res
			.status(403)
			.json({
				status: 403,
				message:
					"It looks like you sent some data that was empty or had an invalid character length. make sure they have at least 3 letters",
			});
	if (!validateEmail)
		return res
			.status(403)
			.json({ status: 403, message: "ClientEmail is not a valid email." });
	if (!validateCellPhone)
		return res
			.status(403)
			.json({
				status: 403,
				message: "ClientCellphone is not a valid cell phone number.",
			});

	if (typeof prime !== "boolean")
		return res
			.status(403)
			.json({
				status: 403,
				message: "The value of the prime field must be boolean.",
			});

	const validateItems = items.every(({ name = false, quantity = false }) =>
		name && quantity ? true : false,
	);

	if (!validateItems)
		return res
			.status(403)
			.json({
				status: 403,
				message:
					"You must send the data required for each product. name, quantity",
			});

	const formatItems = items.map(({ description = "", ...val }) => ({
		description,
		...val,
	}));

	const validateFormatItems = items.every(({ name, quantity}) =>
		isEmpty(name) && !isNaN(parseInt(quantity)) ? true : false,
	);

	if(!validateFormatItems)	
		return res
			.status(403)
			.json({
				status: 403,
				message:
					"Quantity must be an integer greater than 0",
			});

	const validateQuantityItems = items.every(({ name, quantity}) =>	
		quantity > 0 ? true : false,
	);

	if(!validateQuantityItems)	
		return res
			.status(403)
			.json({
				status: 403,
				message:
					"Quantity must be an integer greater than 0",
			});

	const defaultValues = {
		lng,
		lat,
		middleName,
	};

	const newData = {
		...strings,
		...emails,
		...cellPhone,
		...dates,
		...defaultValues,
		...automatizedData,
		prime,
		storeID,
		items: formatItems,
	};

	try {

		const result = await newRequest(newData);

		res.status(200).json(result);
	} catch ({ status = 500, message = "" }) {
		res.status(status).json({ status, message });
	}
};
