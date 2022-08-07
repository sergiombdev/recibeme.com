const path = require("path");
const { updateWebHook } = require(path.resolve(
	__dirname,
	"..",
	"controlers",
	"inventory.controller"
));

const { isUrl, isHeader } = require(path.resolve(
	__dirname,
	"..",
	"..",
	"..",
	"events",
	"validate.format"
));

module.exports.infoStore = async (req, res) => {
	res.status(200).json(req.infoStore);
};

module.exports.updateWebHookModel = async (req, res) => {
	const { id_store } = req.infoStore;
	const { url, headers } = req.body;

	if (!url && !headers)
		return res.status(403).json({ status: 403, message: "Data error." });

	if (headers) {
		if (isHeader(headers.replaceAll("'", '"')) && isUrl(url)) {
			try {
				await updateWebHook({
					id_store,
					url,
					headers: headers.replaceAll("'", '"'),
				});
				res.status(200).json({ status: 200, message: "ok" });
			} catch ({ status = 403, message = "" }) {
				res.status(403).json({ status, message });
			}
		} else {
			res.status(403).json({ status: 403, message: "Data error." });
		}
	} else {
		if (!isUrl(url))
			return res.status(403).json({ status: 403, message: "Url error." });

		try {
			await updateWebHook({ id_store, url, headers });
			res.status(200).json({ status: 200, message: "ok" });
		} catch ({ status = 403, message = "" }) {
			res.status(403).json({ status, message });
		}
	}
};
