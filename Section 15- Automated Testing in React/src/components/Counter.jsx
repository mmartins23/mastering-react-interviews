import { useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [inputVal, setInputVal] = useState("");
    return (
        <div>
            <h3 data-testid="cnt">{counter}</h3>
            <button data-testid="btn" onClick={() => setCounter(prevCounter => prevCounter + 1)}>Increment</button>
            <input type="text" data-testid="input" defaultValue="10" onChange={e => setInputVal(e.target.value)}/>
        </div>
    )
}

export default Counter