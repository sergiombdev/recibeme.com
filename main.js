process.env.TZ = "America/La_Paz";
process.env.ENVIRONMENT = "prod";

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const path = require('path');


const { requestLogs, filesLogsControl } = require( path.resolve(__dirname,"events","log.events") );
const { version, defaultPort } = require( path.resolve(__dirname,"env") );
const { configCors } = require( path.resolve(__dirname,"config","cors.config") );

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

app.use(express.static(path.resolve(__dirname,"public")));
app.use("/admin",express.static(path.resolve(__dirname,"public")));
app.use("/admin/:store",express.static(path.resolve(__dirname,"public")));

app.use("/api", require( path.resolve(__dirname,"api",version)));

app.get('*', (req, res)=>{
  res.status(404).json({status: 404, message: "Address not found."});
});

app.listen(app.get("port"), () => {
	console.log(`Server listening on port ${app.get("port")}`);
});
