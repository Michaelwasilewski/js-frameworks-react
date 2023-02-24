import React from 'react';

const ButtonComponent = () => {
	const [count, setCount] = useState(10); // return array
	// 1. Value
	// 2. function to use to update your value or viewmodel value

	function handleIncrementCount() {
		console.log('You clicked the +');
		setCount(count + 1);
	}
	function handleDecrementCount() {
		console.log('You clicked the -');
		setCount(count - 1);
	}

	return (
		<>
			<button onClick={handleDecrementCount}>-</button>
			<span>{count}</span>
			<button onClick={handleIncrementCount}>+</button>
		</>
	);
};

export default ButtonComponent;
