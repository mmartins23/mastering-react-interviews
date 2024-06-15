Event handling in TypeScript with React involves defining event handlers with type annotations to ensure type safety. Let's explore how to handle various types of events, such as a mouse event and an HTML button event, with TypeScript:

### Handling onClick Events with TypeScript

#### Example 1: Handling Mouse Click Event

In this example, we'll handle a mouse click event (`MouseEvent`) in a React component using TypeScript.

1. **Create a new file** named `MouseClickExample.tsx` in your `src` directory.

2. **Add the following code** to `MouseClickExample.tsx`:

```typescript
// MouseClickExample.tsx

import React from 'react';

const MouseClickExample = () => {
  // Event handler function for mouse click
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Mouse clicked!', event);
  };

  return (
    <div>
      <h2>Mouse Click Example</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default MouseClickExample;
```

### Explanation

- **`handleClick` Function**: 
  - Accepts an `event` parameter of type `React.MouseEvent<HTMLButtonElement>`, which represents the mouse click event on a `<button>` element.
  - Logs a message and the event details to the console when the button is clicked.

- **Button Element**: 
  - Renders a `<button>` element with an `onClick` attribute that binds to the `handleClick` event handler.

#### Example 2: Handling HTML Button Click Event

In this example, we'll handle a button click event (`MouseEvent`) using TypeScript.

1. **Create a new file** named `ButtonClickExample.tsx` in your `src` directory.

2. **Add the following code** to `ButtonClickExample.tsx`:

```typescript
// ButtonClickExample.tsx

import React from 'react';

const ButtonClickExample = () => {
  // Event handler function for button click
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log('Button clicked!', event);
  };

  return (
    <div>
      <h2>Button Click Example</h2>
      <button onClick={handleButtonClick}>Click Me</button>
    </div>
  );
};

export default ButtonClickExample;
```

### Explanation

- **`handleButtonClick` Function**: 
  - Accepts an `event` parameter of type `React.MouseEvent<HTMLButtonElement, MouseEvent>`, which represents the mouse click event on a `<button>` element.
  - Logs a message and the event details to the console when the button is clicked.

- **Button Element**: 
  - Renders a `<button>` element with an `onClick` attribute that binds to the `handleButtonClick` event handler.

### Using the Components

Now, you can use these components (`MouseClickExample` and `ButtonClickExample`) in your `App.tsx` or any other component:

```typescript
// App.tsx

import React from 'react';
import './App.css';
import MouseClickExample from './MouseClickExample';
import ButtonClickExample from './ButtonClickExample';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <MouseClickExample />
        <ButtonClickExample />
      </header>
    </div>
  );
};

export default App;
```

### Summary

- **Type Annotations**: TypeScript ensures type safety by specifying the event handler function's parameter types (`React.MouseEvent<HTMLButtonElement>` or `React.MouseEvent<HTMLButtonElement, MouseEvent>`).
- **Event Handling**: Demonstrates how to handle mouse click events (`MouseEvent`) on React components using TypeScript.
- **Functional Components**: Shows how to define and use event handlers (`onClick` in this case) in functional components with TypeScript, ensuring type safety and clear API definitions.

These examples illustrate how TypeScript enhances event handling in React applications by enforcing type definitions for event handler functions, preventing common runtime errors related to incorrect event handler signatures.