### Using Primitive Types with `useState` in React

The `useState` hook in React can manage primitive types such as numbers, strings, and booleans. Here's how you can use `useState` with these types, including an example of toggling visibility (hiding/showing) using a boolean state.

### Example: Hiding and Showing Content with Boolean State

In this example, we will use a boolean state to toggle the visibility of a text element.

#### Component Code:

```javascript
import { useState } from "react";

export const VisibilityToggle = () => {
    // Initialize state with a boolean value
    const [isVisible, setIsVisible] = useState(true);

    // Function to toggle the boolean state
    const toggleVisibility = () => {
        setIsVisible(prevState => !prevState);
    }

    return (
        <div>
            <button onClick={toggleVisibility}>
                {isVisible ? "Hide" : "Show"} Content
            </button>
            {isVisible && <p>This content is visible</p>}
        </div>
    );
};
```

### Explanation:

1. **Import `useState`**:
   ```javascript
   import { useState } from "react";
   ```

2. **Initialize State**:
   ```javascript
   const [isVisible, setIsVisible] = useState(true);
   ```
   - `isVisible` is the state variable, initially set to `true`.
   - `setIsVisible` is the function to update the state.

3. **Toggle Function**:
   ```javascript
   const toggleVisibility = () => {
       setIsVisible(prevState => !prevState);
   }
   ```
   - `toggleVisibility` toggles the state between `true` and `false`.

4. **Button and Conditional Rendering**:
   ```javascript
   <button onClick={toggleVisibility}>
       {isVisible ? "Hide" : "Show"} Content
   </button>
   {isVisible && <p>This content is visible</p>}
   ```
   - The button text changes based on `isVisible`.
   - The paragraph is conditionally rendered based on the `isVisible` state.

### Other Primitive Types with `useState`

#### Numbers:

```javascript
import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
    );
};
```

#### Strings:

```javascript
import { useState } from "react";

export const TextInput = () => {
    const [text, setText] = useState("");

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <p>{text}</p>
        </div>
    );
};
```

### Summary

- **Boolean State**: Useful for toggling visibility or any binary state.
- **Number State**: Commonly used for counters or numerical inputs.
- **String State**: Used for text inputs and string manipulation.

The `useState` hook provides a straightforward way to manage primitive types, allowing you to create dynamic and interactive components easily.