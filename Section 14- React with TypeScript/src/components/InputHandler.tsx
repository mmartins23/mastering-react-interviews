import  { useState } from 'react';

const InputHandler = () => {
  // Step 1: Define state using useState with type annotation
  const [inputValue, setInputValue] = useState<string>(''); // Initialize inputValue as a string with initial value ''

  // Step 2: Define event handler with proper type annotation
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value); // Update inputValue state with the new value from the input field
  };

  // Step 3: Return JSX to render the component
  return (
    <div>
      <h2>Input Handler</h2>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Current Value: {inputValue}</p>
    </div>
  );
};

export default InputHandler;
