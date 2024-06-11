### 1. What is a State in a Component?

**State** in a React component is a built-in object that holds property values that belong to the component. When the state changes, the component re-renders to reflect the new state, making it dynamic and interactive.

### 2. How Do You Create a State in a Functional Component?

In functional components, you create state using the `useState` hook. The `useState` hook is a special function that lets you add state to functional components.

### 3. Purpose of `useState` Hook

The `useState` hook is used to declare state variables in functional components. It returns an array with two elements:
1. The current state value.
2. A function to update the state.

### Example: Using `useState` in a Functional Component

#### Component Code:
```javascript
import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
            <button onClick={() => setCount(prev => prev - 1)}>Decrease</button>
        </div>
    );
};
```

### Explanation:

1. **Importing `useState`**:
   ```javascript
   import { useState } from "react";
   ```
   This imports the `useState` hook from the React library.

2. **Creating State**:
   ```javascript
   const [count, setCount] = useState(0);
   ```
   - `count` is the state variable holding the current count value.
   - `setCount` is the function used to update the `count` state.
   - `useState(0)` initializes the state with a value of `0`.

3. **Using State**:
   ```javascript
   <p>{count}</p>
   <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
   <button onClick={() => setCount(prev => prev - 1)}>Decrease</button>
   ```
   - The current value of `count` is displayed in a `<p>` element.
   - Two buttons are provided to increase and decrease the count.
   - The `setCount` function updates the `count` state, causing the component to re-render with the new count value.

The `useState` hook allows functional components to manage and update state, enabling them to be dynamic and interactive just like class components.