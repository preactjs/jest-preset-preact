import { h, Component } from 'preact';

describe('serializer', () => {
	it('should serialize simple component', () => {
		const App = () => <div>foo</div>;
		expect(<App />).toMatchSnapshot();
	});

	it('should serialize nested component', () => {
		const Bar = () => <div>Bar</div>;
		const App = () => (
			<div>
				<Bar />
				foo
			</div>
		);
		expect(<App />).toMatchSnapshot();
	});

	it('should class components', () => {
		class App extends Component {
			render() {
				return <div />;
			}
		}
		expect(<App />).toMatchSnapshot();
	});
});
