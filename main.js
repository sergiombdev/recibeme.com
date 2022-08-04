process.env.TZ = "America/La_Paz";
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");

const { requestLogs, filesLogsControl } = require("./events/log.events");
const { version, defaultPort } = require("./env");
const { configCors } = require("./config/cors.config");

const app = express();

app.set("port", process.env.PORT || defaultPort);
app.set("json spaces", 2);

app.use(filesLogsControl, requestLogs)
app.use(cors(configCors));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(helmet());

app.use(express.static(__dirname+"/public"));
app.use("/admin",express.static(__dirname+"/public"));
app.use("/admin/:store",express.static(__dirname+"/public"));




app.use("/api", require(`${__dirname}/api/${version}`));

app.get('*', (req, res)=>{
  res.status(404).json({status: 404, message: "Address not found."});
});

app.listen(app.get("port"), () => {
	console.log(`Server listening on port ${app.get("port")}`);
});
