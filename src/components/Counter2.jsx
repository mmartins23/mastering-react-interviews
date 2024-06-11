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
    )
}
