import  { useState, useEffect } from "react";

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
