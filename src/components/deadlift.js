import React, { useState } from 'react';

const Deadlift = () => {
	const [ name, setName ] = useState('');

	return (
		<div id="Deadlift">
			<form action="submit">
				<label htmlFor="Enter 1PM">
					Enter your one rep max:
					<input
						type="number"
						placeholder="Weight in KG"
						onChange={(e) => setName(e.target.value)}
						value={name}
					/>
				</label>
			</form>
			<h2>Deadlift</h2>
			<div className="week">
				<h3>Week 1</h3>
				<p>Warmup: {name * 0.2}</p>
				<p>Warmup: {name * 0.3}</p>
				<p>Warmup: {name * 0.5}</p>
				<p>Set 1 - 5 Reps: {name * 0.6}</p>
				<p>Set 2 - 3 Reps: {name * 0.7}</p>
				<p>Set 3 - 1 Rep: {name * 0.8}</p>
			</div>
			<div className="week">
				<h3>Week 2 - 3 Lifts per set</h3>
				<p>Warmup: {name * 0.2}</p>
				<p>Warmup: {name * 0.3}</p>
				<p>Warmup: {name * 0.5}</p>
				<p>Set 1 - 5 Reps: {name * 0.65}</p>
				<p>Set 2 - 3 Reps: {name * 0.75}</p>
				<p>Set 3 - 1 Rep: {name * 0.85}</p>
			</div>
			<div className="week">
				<h3>Week 3 - 1 Lift per set</h3>
				<p>Warmup: {name * 0.2}</p>
				<p>Warmup: {name * 0.3}</p>
				<p>Warmup: {name * 0.5}</p>
				<p>Set 1 - 5 Reps: {name * 0.8}</p>
				<p>Set 2 - 3 Reps: {name * 0.85}</p>
				<p>Set 3 - 1 Rep: {name * 0.9}</p>
			</div>
			<div className="week">
				<h3>Week 4 - Deload Week</h3>
				<p>Warmup: {name * 0.2}</p>
				<p>Warmup: {name * 0.3}</p>
				<p>Warmup: {name * 0.4}</p>
				<p>Set 1 - 5 Reps: {name * 0.5}</p>
				<p>Set 2 - 3 Reps: {name * (0.55).toFixed(1)}</p>
				<p>Set 3 - 1 Rep: {name * 0.6}</p>
			</div>
		</div>
	);
};

export default Deadlift;
