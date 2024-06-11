import React, { useState, useMemo, useCallback } from "react";

const Counter3 = () => {
    const [count, setCount] = useState(0);
    const [items, setItems] = useState([1, 2, 3]);

    // useMemo to memoize the sum of items
    const sumOfItems = useMemo(() => {
        console.log("Calculating sum of items...");
        return items.reduce((total, item) => total + item, 0);
    }, [items]);

    // useCallback to memoize the addItem function
    const addItem = useCallback(() => {
        setItems(prevItems => [...prevItems, prevItems.length + 1]);
    }, [setItems]);

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>

            <h2>Sum of Items: {sumOfItems}</h2>
            <button onClick={addItem}>Add Item</button>

            <ul>
                {items.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Counter3;
