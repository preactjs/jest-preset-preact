const babelJest = require('babel-jest');
const babel = require('@babel/core');

// Use config file if present.
const config = babel.loadPartialConfig();
const options = config.files.size
	? config.options
	: {
		presets: [
			[
				'@babel/preset-typescript',
				{
					jsxPragma: 'h',
					jsxPragmaFrag: 'Fragment',
				},
			],
			'@babel/preset-env',
		],
		plugins: [
			[
				'@babel/plugin-transform-react-jsx',
				{
					pragma: 'h',
					pragmaFrag: 'Fragment',
				},
			],
			'@babel/plugin-proposal-class-properties',
		],
		babelrc: false,
		configFile: false,
	};

module.exports = {
	...babelJest.default,
	createTransformer: () => babelJest.default.createTransformer(options),
};
