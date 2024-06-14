import useCounter from "../hooks/useCounter";

function Component2() {
    const buttonClicked = useCounter(0, "Component 2");


    return (
        <div>
            <h1>Component 2</h1>
            <button onClick={buttonClicked}>Click here!</button>
        </div>
    )
}

export default Component2