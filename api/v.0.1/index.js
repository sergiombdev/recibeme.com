const { Router } = require("express");
const { tokenAccess } = require('./middelware/token.middelware');


const api = Router();

api.use("/auth", require("./routes/auth.route"));

api.get("/test", tokenAccess ,(req,res)=>{
	res.status(200).json(req.infoStore);
});

module.exports = api;
