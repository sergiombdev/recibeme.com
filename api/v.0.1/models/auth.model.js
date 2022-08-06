const path = require("path");

const { login } = require(path.resolve(
	__dirname,
	"..",
	"controlers",
	"auth.controller"
));

module.exports.authStore = async (req, res) => {
	try {
		const data = await login(req.body);
		res.status(200).json(data);
	} catch ({ status = 500, message = "" }) {
		res.status(status).json({ message });
	}
};
