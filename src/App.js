import React, { Component } from 'react';
import Navbar from './components/navbar';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div id="App">
				<Navbar />
				<h1>Hello World</h1>
			</div>
		);
	}
}

export default App;
