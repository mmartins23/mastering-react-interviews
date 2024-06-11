1. **Do you have life cycle methods in a functional component?**
In traditional class components, you have lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` to manage component lifecycle events. However, functional components don't have built-in lifecycle methods.

<br>

2. **How do you manage life cycle methods life functionality inside a functional component?** 
In functional components, you manage lifecycle functionality using the `useEffect` hook. `useEffect` allows you to perform side effects in your components, such as fetching data, subscribing to events, or updating the DOM. You can control when these side effects occur by specifying dependencies.

<br>

3. **The Purpose of the `useEffect` Hook**:

The `useEffect` hook is used to perform side effects in functional components. Its primary purpose is to allow you to execute code based on certain conditions:

- **Mounting**: Run code when the component mounts (similar to `componentDidMount` in class components).
- **Updating**: Run code when specific props or state values change (similar to `componentDidUpdate` in class components).
- **Unmounting**: Clean up resources when the component unmounts (similar to `componentWillUnmount` in class components).

### Example:

```javascript
import React, { useState, useEffect } from "react";

const ExampleComponent = () => {
    const [count, setCount] = useState(0);

    // useEffect with an empty dependency array acts like componentDidMount
    useEffect(() => {
        console.log("Component mounted");
        return () => {
            console.log("Component unmounted");
        };
    }, []);

    // useEffect with a dependency acts like componentDidUpdate
    useEffect(() => {
        console.log("Count changed:", count);
    }, [count]);

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Increment</button>
        </div>
    );
};

export default ExampleComponent;
```

In this example:
- The first `useEffect` runs only when the component mounts (`componentDidMount` equivalent).
- The second `useEffect` runs whenever the `count` state changes (`componentDidUpdate` equivalent).
- The return function inside the `useEffect` is used for cleanup (`componentWillUnmount` equivalent).


***

## Creating A Digital Clock Using useEffect()

Creating a digital clock using `useEffect()` in React involves updating the time display every second. We'll use the `useEffect()` hook to set up an interval that updates the time every second and cleans up when the component unmounts.

Here's how you can create a digital clock using `useEffect()`:

```javascript
import React, { useState, useEffect } from "react";

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        // Update the time every second
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Clean up the interval on unmount
        return () => clearInterval(interval);
    }, []); // Empty dependency array to run the effect only once on mount

    // Format the time as HH:MM:SS
    const formattedTime = time.toLocaleTimeString();

    return (
        <div>
            <h2>Digital Clock</h2>
            <p>{formattedTime}</p>
        </div>
    );
};

export default DigitalClock;
```

### Explanation:

1. **Importing Dependencies**:
   ```javascript
   import React, { useState, useEffect } from "react";
   ```
   - We import `useState` and `useEffect` hooks from the `react` package.

2. **State Initialization**:
   ```javascript
   const [time, setTime] = useState(new Date());
   ```
   - We initialize a state variable `time` to hold the current time.

3. **`useEffect()` Hook**:
   ```javascript
   useEffect(() => {
       const interval = setInterval(() => {
           setTime(new Date());
       }, 1000);

       return () => clearInterval(interval);
   }, []);
   ```
   - We use the `useEffect()` hook to set up a timer that updates the time every second.
   - We clean up the timer on component unmount to avoid memory leaks.
   - By passing an empty dependency array `[]`, we ensure that the effect runs only once on component mount.

4. **Rendering**:
   ```javascript
   const formattedTime = time.toLocaleTimeString();
   ```
   - We format the time using `toLocaleTimeString()` to display it as HH:MM:SS.

5. **Return JSX**:
   ```javascript
   return (
       <div>
           <h2>Digital Clock</h2>
           <p>{formattedTime}</p>
       </div>
   );
   ```
   - We return JSX to render the digital clock component.

By using `useEffect()`, we can create a digital clock that updates in real-time without blocking the main thread.
