const { join } = require('path');
const babelJest = require('babel-jest');

module.exports = babelJest.default.createTransformer({
	...require(join(__dirname, '..', 'babel.config.json')),
	babelrc: false,
	configFile: false,
});
