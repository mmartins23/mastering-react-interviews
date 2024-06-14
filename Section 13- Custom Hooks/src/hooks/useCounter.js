import { useEffect, useState } from "react";

function useCounter(initialValue, componentName) {

    const [counter, setCounter] = useState(initialValue);

    const resetCounter = () => {
        setCounter(prevCounter => prevCounter + 1);
    }

    useEffect(() => {
        console.log(componentName + "click count : " + counter)
    })

    return resetCounter;
}

export default useCounter;