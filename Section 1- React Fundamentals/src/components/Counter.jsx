import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
            <button onClick={() => setCount(prev => prev - 1)}>Decrease</button>
        </div>
    )
}
