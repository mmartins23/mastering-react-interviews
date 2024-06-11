# Explain clean up code with useEffect hook()

### Example: Cleaning Up an Effect

This example demonstrates how to properly clean up an interval timer when the component unmounts or when the effect is re-run.

```javascript
import React, { useState, useEffect } from "react";

const TimerComponent = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Set up an interval to increment the count every second
        const timer = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        // Cleanup function to clear the interval
        return () => {
            clearInterval(timer);
            console.log("Cleaning up the timer");
        };
    }, []); // Empty dependency array means this effect runs only once on mount

    return (
        <div>
            <p>Count: {count}</p>
        </div>
    );
};

export default TimerComponent;
```

### Explanation:

1. **State Initialization**:
   ```javascript
   const [count, setCount] = useState(0);
   ```
   - We initialize a state variable `count` with an initial value of `0`.

2. **Effect Setup**:
   ```javascript
   useEffect(() => {
       const timer = setInterval(() => {
           setCount(prevCount => prevCount + 1);
       }, 1000);
   ```
   - We set up an interval that increments the `count` state by 1 every second.

3. **Cleanup Function**:
   ```javascript
       return () => {
           clearInterval(timer);
           console.log("Cleaning up the timer");
       };
   }, []);
   ```
   - The cleanup function is returned from the `useEffect` hook.
   - This function clears the interval when the component unmounts or before the effect runs again (if dependencies had been specified and changed).

4. **Empty Dependency Array**:
   ```javascript
   }, []); 
   ```
   - The empty dependency array ensures that the effect runs only once after the initial render, similar to `componentDidMount` in class components.

5. **Rendering**:
   ```javascript
   return (
       <div>
           <p>Count: {count}</p>
       </div>
   );
   ```
   - The component renders the current value of the `count` state.

### Summary:

- The `useEffect` hook sets up a timer using `setInterval`.
- The cleanup function returned from `useEffect` clears the interval using `clearInterval` to prevent memory leaks and unexpected behavior when the component unmounts.
- By using an empty dependency array, the effect runs only once when the component mounts.

This approach ensures that resources are properly managed and that side effects don't cause issues in your React application.