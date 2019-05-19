import React from 'react';

const BenchPress = () => {
	return (
		<div id="BenchPress">
			<form action="submit" onSubmit="run">
				<label htmlFor="Enter 1PM">Enter your one rep max:
				<input type="number" placeholder="Weight in KG"/>
				</label>
				<button>Submit</button>
			</form>
			<h2>Bench Press: 0</h2>
		</div>
	);
};

export default BenchPress;
