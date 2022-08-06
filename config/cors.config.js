module.exports.configCors = {
	origin: [
		{
			origin: "*",
			credentials: true, //access-control-allow-credentials:true
			optionSuccessStatus: 200,
		},
	],
	methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
};
