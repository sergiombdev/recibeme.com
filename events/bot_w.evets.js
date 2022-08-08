const request = require("request");
const TOKEN_VALUE =
	"Bearer EAAGEXpRzQbYBAEw0fx4tK4et0mpyrHagZCF0BRxvy6o5FzssZCJLvxLk2nZALM6b9IvtNVDF0KiYOpLaHk1M6nn6sSqUKnlQxaj7ejqYsZBAGQ874JzKGFwBa1LFUs4HS71R0VE0cY1ERZBfrKZBWR0zTxSM1yIPjWY9WBC1evlLDE0O4EuuQPXk9TnkxGKLZAr1ZCcAjBhSgAZDZD";
const API_URL = "https://graph.facebook.com/v13.0/101238302648581/messages";

module.exports.botWhatsApp = (
	to,
	id_delivery_status,
	{ store_name, first_name, delivery_time }
) => {
	let name = "";
	let parameters = "";

	if (id_delivery_status === 1001) {
		name = "status_preparado";

		parameters = [
			{ type: "text", text: first_name },
			{ type: "text", text: store_name },
			{ type: "text", text: new Date(delivery_time).toLocaleDateString() },
			{ type: "text", text: new Date(delivery_time).toLocaleTimeString() },
		];
	} else if (id_delivery_status === 1002) {
		name = "status_entregado";
		parameters = [{ type: "text", text: first_name }];
	} else {
		name = "status_terminal_entregado";
		parameters = [{ type: "text", text: first_name }];
	}

	return new Promise((resolve, reject) => {
		var payload = {
			messaging_product: "whatsapp",
			to: parseInt(to.replaceAll("+", "")),
			type: "template",
			template: {
				name,
				language: {
					code: "en_US",
				},
				components: [
					{
						type: "body",
						parameters,
					},
				],
			},
		};

		var options = {
			url: API_URL,
			headers: {
				"content-type": "application/x-www-form-urlencoded",
				Authorization: TOKEN_VALUE,
			},
			method: "POST",
			form: payload,
		};

		request(options, (error, response, body) => {
			if (error) reject(error);
			console.log(body);
			resolve(body);
		});
	});
};
