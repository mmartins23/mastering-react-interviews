import { useState } from "react"

const InputEvent = () => {
    const [text, setText] = useState("");
    return (
        <div>
            <p>{text}</p>
            <input type="text" onChange={e => setText(e.target.value)} />
        </div>
    )
}

export default InputEvent