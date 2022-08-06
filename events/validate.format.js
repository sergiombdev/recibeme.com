module.exports.isDate = (val) =>
	/^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/gm.exec(
		val
	);

module.exports.isCellphone = (val) =>
	/(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/g.exec(
		val
	);

module.exports.isEmail = (val) => /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/g.exec(val);

module.exports.isEmpty = (val) =>
	/^([#@£$-/:-?{-~!"^_ `\[\]a-zA-Z0-9]){3,25}$/g.exec(val);
