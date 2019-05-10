import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import RepMax from './components/repMax';
import BenchPress from './components/benchPress';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<Router>
				<div id="App">
					<Navbar />
					<Switch>
						<Route exact path="/" component={RepMax} />
						<Route exact path="/bench" component={BenchPress} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
