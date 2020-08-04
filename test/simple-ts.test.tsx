import { FunctionalComponent, h } from 'preact';

describe('serializer', () => {
	it('should serialize simple component', () => {
		const App: FunctionalComponent = () => <div>foo</div>;
		expect(<App />).toMatchSnapshot();
	});
});
