import React from 'react';

const Deadlift = () => {
	return (
		<div id="Deadlift">
			<form action="submit" onSubmit="run">
				<label htmlFor="Enter 1PM">Enter your one rep max:
				<input type="number" placeholder="Weight in KG"/>
				</label>
				<button>Submit</button>
			</form>
			<h2>Deadlift: 0</h2>
		</div>
	);
};

export default Deadlift;
