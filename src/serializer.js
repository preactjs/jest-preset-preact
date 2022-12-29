const render = require('preact-render-to-string/jsx');

module.exports = {
	test(value) {
		return (
			value && typeof value === 'object' && value.constructor === undefined
		);
	},
	print(value, serialize, indent) {
		const result = render(value);
		return indent(result);
	},
};
