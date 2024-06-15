Handling `onChange` events in React with TypeScript involves defining event handlers with type annotations to ensure type safety. Let's explore how to handle `onChange` events for input elements.

### Example: Input Component with Event Handling

In this example, we'll create an input component that captures user input and displays it, demonstrating TypeScript's type annotations for `onChange` event handling.

1. **Create a new file** named `InputHandler.tsx` in your `src` directory.

2. **Add the following code** to `InputHandler.tsx`:

```typescript
// InputHandler.tsx

import React, { useState } from 'react';

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
```

### Explanation

- **Step 1: Define state using `useState`**: 
  - `useState<string>('')`: Initializes `inputValue` state as a string with an initial value of an empty string (`''`). TypeScript infers the type based on the generic `<string>` provided.

- **Step 2: Define event handler (`handleChange`)**:
  - The function accepts an `event` parameter of type `React.ChangeEvent<HTMLInputElement>`, which represents the change event on an `<input>` element.
  - The `setInputValue` function updates the `inputValue` state with the new value from the input field (`event.target.value`).

- **Step 3: Render JSX**:
  - Returns JSX that includes an `<input>` element and a `<p>` element to display the current value of the input.
  - The `onChange` attribute on the input element binds to the `handleChange` event handler.

### Using the `InputHandler` Component

Now, you can use the `InputHandler` component in your `App.tsx` or any other component:

```typescript
// App.tsx

import React from 'react';
import './App.css';
import InputHandler from './InputHandler';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <InputHandler />
      </header>
    </div>
  );
};

export default App;
```

### Summary

- **Type Safety**: TypeScript ensures type safety by inferring or explicitly defining types for state variables (`inputValue` in this case) and event handler functions (`handleChange`).
- **Event Handling**: Demonstrates how to handle `onChange` events in a React functional component using TypeScript.
- **Functional Components**: Shows how to define and use event handlers (`onChange` in this case) in functional components with TypeScript, ensuring type safety and clear API definitions.

This example illustrates how TypeScript enhances event handling in React applications by enforcing type definitions for event handler functions, preventing common runtime errors related to incorrect event handler signatures and ensuring robustness in development.