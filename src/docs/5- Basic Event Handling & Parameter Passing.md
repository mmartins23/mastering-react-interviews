### 1. How to Write Events

In React, event handling is done using camelCase syntax and passing the event handler function directly to the element as a prop.

### 2. How to Pass Parameters with Event Handling

You can pass parameters to event handlers by wrapping the function in another function.

### Example: Using Event Handlers and Passing Parameters

#### Component Code:

```javascript
import { useState } from "react";

export const Counter2 = () => {
    const [count, setCount] = useState(0);

    const increaseValue = () => {
        setCount(prev => prev + 1);
    }

    const decreaseValue = () => {
        setCount(prev => prev - 1);
    }

    const setToValue = (value) => {
        setCount(value);
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={increaseValue}>Increase</button>
            <button onClick={decreaseValue}>Decrease</button>
            <button onClick={() => setToValue(10)}>Set to 10</button>
        </div>
    );
}
```

### Explanation:

1. **Event Handling Without Parameters**:
   ```javascript
   <button onClick={increaseValue}>Increase</button>
   <button onClick={decreaseValue}>Decrease</button>
   ```
   - `increaseValue` and `decreaseValue` are functions that handle the click events.
   - These functions update the state using the `setCount` function.

2. **Passing Parameters with Event Handling**:
   ```javascript
   const setToValue = (value) => {
       setCount(value);
   }

   <button onClick={() => setToValue(10)}>Set to 10</button>
   ```
   - `setToValue` is a function that sets the `count` to a specific value.
   - To pass a parameter (`10` in this case), we wrap the function call in an arrow function.
   - `() => setToValue(10)` creates a new function that calls `setToValue` with the parameter `10`.

### Summary

- **Writing Events**: Use camelCase syntax and pass the event handler directly to the element.
- **Passing Parameters**: Wrap the function call in another function to pass parameters.

This approach ensures that parameters can be passed to the event handler function properly, maintaining the desired functionality in the component.