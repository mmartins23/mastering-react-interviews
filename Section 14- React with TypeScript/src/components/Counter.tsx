import { useState } from 'react';

const Counter = () => {
  // Step 1: Define state using useState with type annotation
  const [count, setCount] = useState<number>(0); // Initialize count as a number with initial value 0

  // Step 2: Define event handlers
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  // Step 3: Return JSX to render the component
  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
