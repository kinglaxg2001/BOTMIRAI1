const login = require("./login");
module.exports = async function({ email, password, appState }, callback) {
	if (typeof callback !== "function") return console.error("You must pass a function");
	let api;
	try {
		api = await login({ appState });
		callback(undefined, api);
	}
	catch (e) {
		callback(e);
	}
}