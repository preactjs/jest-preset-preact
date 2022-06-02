const babelJest = require('babel-jest');

module.exports = babelJest.default.createTransformer({
	...require('../babel.config.json'),
	babelrc: false,
	configFile: false,
});
