const babelJest = require('babel-jest');

module.exports = babelJest.default.createTransformer({
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
});
