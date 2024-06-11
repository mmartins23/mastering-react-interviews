### 1. How can you prevent useEffect() to be called for all states?

To prevent `useEffect` from being called for all state changes, you can specify an array of dependencies as the second argument to `useEffect`. The effect will only run when one of the dependencies changes. If you leave the dependency array empty, the effect will only run once after the initial render and not on subsequent updates.

### Example: `useEffect` with Specified Dependencies

```javascript
import React, { useState, useEffect } from "react";

const ExampleComponent = () => {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");

    useEffect(() => {
        console.log("Count changed");

        // Perform actions based on count

        // Cleanup function
        return () => {
            console.log("Cleaning up after count change");
        };
    }, [count]); // Dependency array with count

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    const updateMessage = () => {
        setMessage("New message");
    };

    return (
        <div>
            <p>Count: {count}</p>
            <p>Message: {message}</p>
            <button onClick={incrementCount}>Increment Count</button>
            <button onClick={updateMessage}>Update Message</button>
        </div>
    );
};

export default ExampleComponent;
```

In this example, the `useEffect` hook runs only when the `count` state changes, not when the `message` state changes.

<br>

### 2. Explain clean up code with useEffect hook()

The cleanup function in `useEffect` is used to clean up side effects when the component unmounts or before the effect runs again. This is important for avoiding memory leaks and ensuring that your component behaves correctly.

### Example: Cleanup Code in `useEffect`

```javascript
import React, { useState, useEffect } from "react";

const TimerComponent = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Setting up timer");

        const timer = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        // Cleanup function
        return () => {
            console.log("Cleaning up timer");
            clearInterval(timer);
        };
    }, []); // Empty dependency array means this effect runs only once

    return (
        <div>
            <p>Count: {count}</p>
        </div>
    );
};

export default TimerComponent;
```

In this example:
- **Setup**: The `useEffect` hook sets up a timer that increments the `count` state every second.
- **Cleanup**: The cleanup function clears the timer when the component unmounts, preventing the timer from continuing to run and potentially causing memory leaks.

### Summary

- **Preventing Unnecessary Calls**: Use a dependency array in `useEffect` to specify which state changes should trigger the effect.
- **Cleanup Function**: The cleanup function returned from `useEffect` ensures that resources are properly released when the component unmounts or before the effect runs again. This is crucial for avoiding memory leaks and ensuring that your component behaves as expected.

***

In the provided `ExampleComponent`, we have an effect that runs whenever either the `count` or `message` state changes. Let's add cleanup logic to the effect to ensure that resources are properly released when the component unmounts or when the dependencies change.

```javascript
import React, { useState, useEffect } from "react";

const ExampleComponent = () => {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");

    useEffect(() => {
        console.log("Count or message changed");

        // Perform actions based on count or message

        // Cleanup function
        return () => {
            // Cleanup logic here
            console.log("Cleaning up effect");
        };
    }, [count, message]);

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    const updateMessage = () => {
        setMessage("New message");
    };

    return (
        <div>
            <p>Count: {count}</p>
            <p>Message: {message}</p>
            <button onClick={incrementCount}>Increment Count</button>
            <button onClick={updateMessage}>Update Message</button>
        </div>
    );
};

export default ExampleComponent;
```

In this updated code:
- Inside the `useEffect` hook, we've added a cleanup function using the `return` statement.
- This cleanup function will be called when the component unmounts or when the `count` or `message` state changes.
- You can perform any cleanup actions, such as clearing intervals, unsubscribing from subscriptions, or releasing other resources, inside this cleanup function.

With this addition, your `ExampleComponent` now properly cleans up any resources associated with the effect when it is no longer needed.