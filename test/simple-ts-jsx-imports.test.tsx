import { h, Fragment, FunctionalComponent } from 'preact';

describe('serializer', () => {
	it('should serialize simple component', () => {
		const App: FunctionalComponent = () => (
			<>
				<div>foo</div>
				<Fragment>
					<div>foo2</div>
				</Fragment>
			</>
		);
		expect(<App />).toMatchSnapshot();
	});
});
