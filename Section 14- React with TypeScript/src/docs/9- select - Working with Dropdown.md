Let's create a TypeScript React component that demonstrates how to work with a `<select>` dropdown element, including handling the `onChange` event.

### Dropdown Component with TypeScript

In this example, we will create a dropdown component that allows users to select a fruit, and we will display the selected fruit.

1. **Create a new file** named `Dropdown.tsx` in your `src` directory.

2. **Add the following code** to `Dropdown.tsx`:

```typescript
// Dropdown.tsx

import React, { useState } from 'react';

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
```

### Explanation

- **Step 1: Define state using `useState`**:
  - `useState<string>('')`: Initializes `selectedFruit` state as a string with an initial value of an empty string (`''`). TypeScript infers the type based on the generic `<string>` provided.

- **Step 2: Define event handler (`handleChange`)**:
  - The function accepts an `event` parameter of type `React.ChangeEvent<HTMLSelectElement>`, which represents the change event on a `<select>` element.
  - The `setSelectedFruit` function updates the `selectedFruit` state with the new value from the dropdown (`event.target.value`).

- **Step 3: Render JSX**:
  - Returns JSX that includes:
    - A `<h2>` element for the title.
    - A `<select>` element with `value` and `onChange` attributes that bind to the `selectedFruit` state and `handleChange` event handler, respectively.
    - `<option>` elements for the dropdown options.
    - A conditional `<p>` element to display the selected fruit if `selectedFruit` is not empty.

### Using the `Dropdown` Component

Now, you can use the `Dropdown` component in your `App.tsx` or any other component:

```typescript
// App.tsx

import React from 'react';
import './App.css';
import Dropdown from './Dropdown';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Dropdown />
      </header>
    </div>
  );
};

export default App;
```

### Summary

- **Type Safety**: TypeScript ensures type safety by inferring or explicitly defining types for state variables (`selectedFruit` in this case) and event handler functions (`handleChange`).
- **Event Handling**: Demonstrates how to handle `onChange` events in a React functional component using TypeScript, specifically for `<select>` elements.
- **Functional Components**: Shows how to define and use event handlers (`onChange` in this case) in functional components with TypeScript, ensuring type safety and clear API definitions.

This example illustrates how TypeScript enhances event handling in React applications by enforcing type definitions for event handler functions, preventing common runtime errors related to incorrect event handler signatures, and ensuring robustness in development.