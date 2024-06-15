import  { useState } from 'react';

const Dropdown = () => {
  // Step 1: Define state using useState with type annotation
  const [selectedFruit, setSelectedFruit] = useState<string>(''); // Initialize selectedFruit as a string with initial value ''

  // Step 2: Define event handler with proper type annotation
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFruit(event.target.value); // Update selectedFruit state with the new value from the dropdown
  };

  // Step 3: Return JSX to render the component
  return (
    <div>
      <h2>Select a Fruit</h2>
      <select value={selectedFruit} onChange={handleChange}>
        <option value="">--Please choose an option--</option>
        <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Cherry">Cherry</option>
        <option value="Mango">Mango</option>
      </select>
      {selectedFruit && <p>Selected Fruit: {selectedFruit}</p>}
    </div>
  );
};

export default Dropdown;
