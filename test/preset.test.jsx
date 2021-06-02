import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'preact';
import style from './foo.less';

describe('preset', () => {
	it('should render a preact app', () => {
		function App() {
			return <h1>foo</h1>;
		}

		const div = document.createElement('div');
		render(<App />, div);
		expect(div.textContent).toEqual('foo');
	});

	it('should have compat aliases set up', () => {
		class App extends React.Component {
			render() {
				return <h1>foo</h1>;
			}
		}

		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
		expect(div.textContent).toEqual('foo');
	});

	it('should polyfill fetch()', () => {
		expect(typeof fetch).toEqual('function');
	});

	it('should work with CSS modules', () => {
		const div = document.createElement('div');
		render(<div class={style.root}>foo</div>, div);
		expect(div.firstChild.className).toEqual('root');
	});

	it('should support Fragments', () => {
		const div = document.createElement('div');
		render(<>foo</>, div);
		expect(div.textContent).toEqual('foo');
	});

	it('should support class properties', () => {
		class App extends React.Component {
			state = {
				foo: 'foo',
			};
			render() {
				return <h1>{this.state.foo}</h1>;
			}
		}

		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
		expect(div.textContent).toEqual('foo');
	});
});
