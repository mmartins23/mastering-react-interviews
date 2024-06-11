The `useRef` hook in React is used to create a mutable object that can hold a value and persist it across renders without causing a re-render when the value changes. It's primarily used for accessing and interacting with DOM elements directly, but it can also be used for storing any mutable value similar to how instance variables work in class components.

### Basic Usage of `useRef`

#### Example: Accessing a DOM Element

```javascript
import React, { useRef, useEffect } from "react";

const FocusInput = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        // Focus the input element when the component mounts
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <input ref={inputRef} type="text" />
        </div>
    );
};

export default FocusInput;
```

### Explanation

1. **Creating a Ref**:
   ```javascript
   const inputRef = useRef(null);
   ```
   - `useRef` returns a mutable object with a `current` property initialized to `null`.
   - The `current` property can be assigned to a DOM element via the `ref` attribute.

2. **Using the Ref**:
   ```javascript
   <input ref={inputRef} type="text" />
   ```
   - The `ref` attribute is set to `inputRef`, linking the input element to the ref object.

3. **Accessing the DOM Element**:
   ```javascript
   useEffect(() => {
       inputRef.current.focus();
   }, []);
   ```
   - When the component mounts, the `useEffect` hook runs, and `inputRef.current` contains the input DOM element.
   - `inputRef.current.focus()` focuses the input element.

### Storing Mutable Values

Apart from accessing DOM elements, `useRef` can store any mutable value that needs to persist across renders without triggering a re-render when updated.

#### Example: Storing a Mutable Value

```javascript
import React, { useState, useRef } from "react";

const TimerComponent = () => {
    const [count, setCount] = useState(0);
    const timerRef = useRef(null);

    const startTimer = () => {
        if (timerRef.current) return; // Prevent multiple intervals

        timerRef.current = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);
    };

    const stopTimer = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={startTimer}>Start Timer</button>
            <button onClick={stopTimer}>Stop Timer</button>
        </div>
    );
};

export default TimerComponent;
```

### Explanation

1. **Creating a Ref for Mutable Value**:
   ```javascript
   const timerRef = useRef(null);
   ```
   - `timerRef` is a mutable object that can hold a reference to the interval ID.

2. **Starting the Timer**:
   ```javascript
   const startTimer = () => {
       if (timerRef.current) return; // Prevent multiple intervals

       timerRef.current = setInterval(() => {
           setCount(prevCount => prevCount + 1);
       }, 1000);
   };
   ```
   - `startTimer` checks if the timer is already running by checking `timerRef.current`.
   - If not, it sets up a new interval and stores the interval ID in `timerRef.current`.

3. **Stopping the Timer**:
   ```javascript
   const stopTimer = () => {
       if (timerRef.current) {
           clearInterval(timerRef.current);
           timerRef.current = null;
       }
   };
   ```
   - `stopTimer` clears the interval using the ID stored in `timerRef.current` and sets it back to `null`.

### Summary

- **`useRef` for DOM Access**: Provides a way to directly access and manipulate DOM elements.
- **`useRef` for Mutable Values**: Stores mutable values that persist across renders without causing re-renders when updated.
- **No Re-renders**: Updating the `current` property of a `useRef` object does not trigger a re-render of the component.

This flexibility makes `useRef` a powerful tool in React for managing both DOM elements and other mutable values in a way that does not impact the rendering performance.