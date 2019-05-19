import React from 'react';
import { useWeightInput } from '../Hooks/useWeightInput';

const Squat = () => {
	const [ name, setName ] = useWeightInput('');

	return (
		<div id="Squat">
			<form
				action="submit"
				onSubmit={(e) => {
					e.preventDefault();
				}}>
				<label htmlFor="Enter 1PM">
					Enter your one rep max:
					<input
						type="number"
						placeholder="Weight in KG"
						onChange={(e) => setName(e.target.value)}
						value={name}
					/>
				</label>
				<button>Submit</button>
			</form>
			<h2>Squat: 0</h2>
		</div>
	);
};

export default Squat;
