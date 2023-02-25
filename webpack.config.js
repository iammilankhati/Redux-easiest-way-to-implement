const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		static: path.join(__dirname, 'dist'),
		hot: true,
		open: true,
		port: 9000,
	},
	mode: 'development',
};
