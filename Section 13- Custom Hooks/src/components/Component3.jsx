import useCounter from "../hooks/useCounter";

function Component3() {
    const buttonClicked = useCounter(0, "Component 3");


    return (
        <div>
            <h1>Component 3</h1>
            <button onClick={buttonClicked}>Click here!</button>
        </div>
    )
}

export default Component3