const fetch = require("node-fetch");

module.exports.sendHook = async (url, headers, body) => {
	const resolve = await fetch(url, {
		method: "POST",
		body,
		headers,
	});
	return resolve.json();
};
