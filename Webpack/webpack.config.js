const path = require("path");

module.exports = {
	devtool: "cheap-eval-source-map",
	entry: "./src/app.js",
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "app.js",
		publicPath: "/public/"
	},
	module: {
		rules: [
			{
				enforce: "pre",
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "eslint-loader"
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: "babel-loader"
			}
		]
	}
}