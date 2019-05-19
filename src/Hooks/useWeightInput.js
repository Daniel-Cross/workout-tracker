import { useState, useEffect } from 'react';

function useWeightInput(initialValue) {
	const [ value, setValue ] = useState(initialValue);

	useEffect(() => {
		document.title = value;
	});

	return [ value, setValue ];
}

export { useWeightInput };
