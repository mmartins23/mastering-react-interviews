import useCounter from "../hooks/useCounter";

function Component1() {
    const buttonClicked = useCounter(0, "Component 1");

    return (
        <div>
            <h1>Component 1</h1>
            <button onClick={buttonClicked}>Click here!</button>
        </div>
    )
}

export default Component1