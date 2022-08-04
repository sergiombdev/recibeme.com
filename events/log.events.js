const fs = require("fs");
const morgan = require("morgan");
const winston = require("winston");
require("winston-daily-rotate-file");

const formatLog =
	":method | :status | :url | :response-time ms | :remote-addr | :remote-user | :dateServer";

const nameLog = () =>
	new Date()
		.toLocaleDateString("es-Es", {
			day: "2-digit",
			month: "2-digit",
			year: "numeric",
		})
		.replaceAll("/", ".");

morgan.token("dateServer", () => new Date().toLocaleTimeString());

module.exports.requestLogs =
	process.env.ENVIRONMENT === "dev"
		? morgan(formatLog)
		: morgan(formatLog, {
				stream: fs.createWriteStream(
					__dirname + `../logs/request/${nameLog()}.log`,
					{
						flags: "a",
					},
				),
		  });

module.exports.filesLogsControl = (req,res,next) => {
	
	process.env.ENVIRONMENT === "prod" ?
		new winston.transports.DailyRotateFile({
			filename: "logs/request/%DATE%.log",
			datePattern: "DD.MM.YYYY",
			zippedArchive: true,
			maxSize: "20m",
			maxFiles: "7",
		}) : null;

	next();
}
