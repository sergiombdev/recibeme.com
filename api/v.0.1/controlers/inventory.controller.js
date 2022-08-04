const path = require('path');
const { RecibemeDB } = require( path.resolve(__dirname,"..","..","..","dataBases","mysql.connect"));

module.exports.stock = ({ id_store = 0 }) => {
	const connectionStart = new RecibemeDB();
	const connect = connectionStart.getConnection();
	const query = `call stockInventory("${id_store}");`;

	return new Promise((resolve, reject) => {
		connect.query(query, (error, result, fields) => {
			connectionStart.connectionClose();

			let data = result ? result : [];

			if (error)
				reject({
					status: 500,
					message: "Internal server error.",
				});

			resolve(data[0] ? data[0] : []);
		});
	});
};

module.exports.totalStock = ({ id_store = 0 }) => {
	const connectionStart = new RecibemeDB();
	const connect = connectionStart.getConnection();
	const query = `call totalStockInventory("${id_store}");`;

	return new Promise((resolve, reject) => {
		connect.query(query, (error, result, fields) => {
			connectionStart.connectionClose();

			let data = result ? result : [];

			if (error)
				reject({
					status: 500,
					message: "Internal server error.",
				});

			resolve(data[0] ? data[0] : []);
		});
	});
};

module.exports.deliveryDetails = ({ id_store = 0 }) => {
	const connectionStart = new RecibemeDB();
	const connect = connectionStart.getConnection();
	const query = `call DetailsDelivery("${id_store}");`;

	return new Promise((resolve, reject) => {
		connect.query(query, (error, result, fields) => {
			connectionStart.connectionClose();

			let data = result ? result : [];

			if (error)
				reject({
					status: 500,
					message: "Internal server error.",
				});

			const formatData = (data[0] ? data[0] : []).map(({ items, ...data }) => ({
				...data,
				items: JSON.parse(items),
			}));

			resolve(data[0] ? formatData : []);
		});
	});
};

module.exports.deliveryTotal = ({ id_store = 0 }) => {
	const connectionStart = new RecibemeDB();
	const connect = connectionStart.getConnection();
	const query = `call totalDelivery("${id_store}");`;

	return new Promise((resolve, reject) => {
		connect.query(query, (error, result, fields) => {
			connectionStart.connectionClose();

			let data = result ? result : [];

			if (error)
				reject({
					status: 500,
					message: "Internal server error.",
				});

			resolve(data[0] ? data[0] : []);
		});
	});
};

module.exports.stockInterval = ({
	id_store = 0,
	startDate = new Date(
		new Date().getFullYear() + "/" + new Date().getMonth() + "/1",
	).toLocaleDateString(),
	endDate = new Date().toLocaleDateString(),
}) => {
	const connectionStart = new RecibemeDB();
	const connect = connectionStart.getConnection();
	const query = `call stockInventoryInterval("${id_store}","${startDate
		.split("/")
		.reverse()
		.join("-")}","${endDate.split("/").reverse().join("-")}");`;

	return new Promise((resolve, reject) => {
		connect.query(query, (error, result, fields) => {
			connectionStart.connectionClose();

			let data = result ? result : [];

			if (error)
				reject({
					status: 500,
					message: "Internal server error.",
				});

			resolve(data[0] ? data[0] : []);
		});
	});
};

module.exports.deliveryInterval = ({
	id_store = 0,
	startDate = new Date(
		new Date().getFullYear() + "/" + new Date().getMonth() + "/1",
	).toLocaleDateString(),
	endDate = new Date().toLocaleDateString(),
}) => {
	const connectionStart = new RecibemeDB();
	const connect = connectionStart.getConnection();
	const query = `call DetailsDeliveryInterval("${id_store}","${startDate
		.split("/")
		.reverse()
		.join("-")}","${endDate.split("/").reverse().join("-")}");`;

	return new Promise((resolve, reject) => {
		connect.query(query, (error, result, fields) => {
			connectionStart.connectionClose();

			let data = result ? result : [];

			if (error)
				reject({
					status: 500,
					message: "Internal server error.",
				});

			const formatData = (data[0] ? data[0] : []).map(({ items, ...data }) => ({
				...data,
				items: JSON.parse(items),
			}));

			resolve(data[0] ? formatData : []);
		});
	});
};

module.exports.newRequest = ({ preferedDeliveryTime, ...data }) => {
	const formatPreferedDeliveryTime = preferedDeliveryTime
		.split("/")
		.reverse()
		.join("-");

	const newData = { preferedDeliveryTime: formatPreferedDeliveryTime, ...data };

	const connectionStart = new RecibemeDB();
	const connect = connectionStart.getConnection();

	const query = `call loadRequest('${JSON.stringify(newData)}',@errorCode, @errorItem);`;

	return new Promise((resolve, reject) => {
		connect.query(query, (error, result, fields) => {

			if (error){
				connectionStart.connectionClose();
				reject({
					status: 500,
					message: "Internal server error.",
				});
			}

			connect.query("select @errorCode, @errorItem;", (error, result, fields) => {
				connectionStart.connectionClose();

				// console.log(result);
				if (error){
					reject({
						status: 500,
						message: "Internal server error.",
					});
				}

				let errorCode = result[0]["@errorCode"].replaceAll("codes_","").split("_");
				let errorItem = result[0]["@errorItem"].replaceAll("items_","").split("_");

			
				let stockItems = errorItem.map(x=>({
					nameItem: x,
					error: "You don't have enough items to cover that sale."
				}));

				resolve({ 
					requestCode: newData.requestCode,
					statusRequest: errorItem[0] !== "items" ? stockItems : []
				});

			});
		});
	});
};
