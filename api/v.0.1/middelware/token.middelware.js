const path = require("path");
const { isToken, isTokenWarehouse } = require(path.resolve(
	__dirname,
	"..",
	"controlers",
	"token.controller"
));

module.exports.tokenAccess = async (req, res, next) => {
	if (!req.headers.api_key)
		return res.status(403).json({
			message: "Access denied, api_key is required.",
		});

	try {
		const data = await isToken(req.headers.api_key);
		req.infoStore = data;
		next();
	} catch ({ status = 500, message = "" }) {
		return res.status(status).json({ message });
	}
};

module.exports.tokenAccessWarehouse = async (req, res, next) => {
	if (!req.headers.api_key)
		return res.status(403).json({
			message: "Access denied, api_key is required.",
		});

	try {
		const data = await isTokenWarehouse(req.headers.api_key);
		req.infoWarehouse = data;
		next();
	} catch ({ status = 500, message = "" }) {
		return res.status(status).json({ message });
	}
};
