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
