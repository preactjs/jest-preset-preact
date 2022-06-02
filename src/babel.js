const { join } = require('path');
const babelJest = require('babel-jest');

module.exports = babelJest.default.createTransformer({
	...require('./shared-babel-config.js'),
	babelrc: false,
	configFile: false,
});
