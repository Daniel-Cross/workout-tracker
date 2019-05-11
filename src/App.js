import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import RepMax from './components/repMax';
import BenchPress from './components/benchPress';
import MilitaryPress from './components/militaryPress';
import Squat from './components/squat';
import Deadlift from './components/deadlift';

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
						<Route exact path="/squat" component={Squat} />
						<Route exact path="/military" component={MilitaryPress} />
						<Route exact path="/deadlift" component={Deadlift} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
