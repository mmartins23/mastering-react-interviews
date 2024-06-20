import { useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h3>{counter}</h3>
            <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>Increment</button>
        </div>
    )
}

export default Counter