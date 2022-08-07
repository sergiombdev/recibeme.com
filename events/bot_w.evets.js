const request = require("request");
const TOKEN_VALUE =
	"Bearer EAAGEXpRzQbYBAEw0fx4tK4et0mpyrHagZCF0BRxvy6o5FzssZCJLvxLk2nZALM6b9IvtNVDF0KiYOpLaHk1M6nn6sSqUKnlQxaj7ejqYsZBAGQ874JzKGFwBa1LFUs4HS71R0VE0cY1ERZBfrKZBWR0zTxSM1yIPjWY9WBC1evlLDE0O4EuuQPXk9TnkxGKLZAr1ZCcAjBhSgAZDZD";
const API_URL = "https://graph.facebook.com/v13.0/101238302648581/messages";

// {
//     to: 59165263449,
//     name: "status_preparado",
//     components: [{
//         "type": "body",
//         "parameters": [
//           {"type": "text", "text": receiver_name},
//           {"type": "text", "text": store_name},
//           {"type": "text", "text": delivery_date},
//           {"type": "text", "text": delivery_hour}
//         ]
//       }]
// }

// {
//     to: 59165263449,
//     name: "status_entregado o status_terminal_entregado"
//     "components": [{
//     "type": "body",
//     "parameters": [
//             {"type": "text", "text": receiver_name},
//         ]
//     }]
// }

module.exports.botWhatsApp = ({ name, to, components }) => {
	return new Promise((resolve, reject) => {
		var payload = {
			messaging_product: "whatsapp",
			to,
			type: "template",
			template: {
				name,
				language: {
					code: "en_US",
				},
				components,
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
			resolve(body);
		});
	});
};
