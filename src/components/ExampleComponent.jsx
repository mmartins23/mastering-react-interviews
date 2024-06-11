import React, { useState, useEffect } from "react";

const ExampleComponent = () => {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");

    useEffect(() => {
        console.log("Count or message changed");
        // Perform actions based on count or message
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
