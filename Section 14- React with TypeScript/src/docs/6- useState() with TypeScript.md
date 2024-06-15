# Using `useState` with TypeScript

In TypeScript, `useState` is used to declare state variables in functional components. It returns a stateful value and a function to update it, similar to the useState hook in JavaScript, but with type annotations for type safety.

#### Example: Counter Component

Let's create a simple counter component to demonstrate the usage of `useState` with TypeScript.

1. **Create a new file** named `Counter.tsx` in your `src` directory.

2. **Add the following code** to `Counter.tsx`:

```typescript
// Counter.tsx

import React, { useState } from 'react';

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
```

### Explanation

- **Step 1: Define state using `useState`**: 
  - `useState<number>(0)`: Initializes `count` state as a number with an initial value of `0`. TypeScript infers the type based on the generic `<number>` provided.

- **Step 2: Define event handlers (`increment` and `decrement`)**:
  - These functions use the `setCount` function returned by `useState` to update the `count` state based on the previous state (`prevCount`).

- **Step 3: Render JSX**:
  - Returns JSX that displays the current `count` state and buttons to increment and decrement it.

### Using the `Counter` Component

Now, you can use the `Counter` component in your `App.tsx` or any other component:

```typescript
// App.tsx

import React from 'react';
import './App.css';
import Counter from './Counter';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
};

export default App;
```

### Summary

- **Type Safety**: TypeScript ensures type safety by inferring or explicitly defining types for state variables (`count` in this case).
- **State Update**: Use the function returned by `useState` (`setCount` in this case) to update state values.
- **Functional Component**: `useState` allows functional components to manage and update state, enabling dynamic UI updates based on state changes.

This example demonstrates how to effectively use `useState` with TypeScript to manage component state in a React application while leveraging TypeScript's type annotations for enhanced development experience and reduced errors.