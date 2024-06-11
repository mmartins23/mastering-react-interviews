# React.memo() & useCallback() hook

Let's create a React component that demonstrates the use of `useMemo` and `useCallback` hooks in detail. These hooks are used for performance optimization in React applications.

### `useMemo`

The `useMemo` hook is used to memoize expensive calculations so that they are only re-computed when one of the dependencies has changed. This can help to avoid unnecessary computations on re-renders.

### `useCallback`

The `useCallback` hook is used to memoize functions so that they are not re-created on every render unless one of their dependencies has changed. This can help to avoid unnecessary re-renders of child components that depend on these functions.

### Example Component

We'll create a `Counter` component that increments a counter and displays a list of items. We'll use `useMemo` to optimize the calculation of the sum of the list items and `useCallback` to memoize the function that adds an item to the list.

```javascript
import React, { useState, useMemo, useCallback } from "react";

const Counter = () => {
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

export default Counter;
```

### Explanation

1. **State Initialization**:
   ```javascript
   const [count, setCount] = useState(0);
   const [items, setItems] = useState([1, 2, 3]);
   ```
   - We initialize `count` with `0` and `items` with an array `[1, 2, 3]`.

2. **useMemo**:
   ```javascript
   const sumOfItems = useMemo(() => {
       console.log("Calculating sum of items...");
       return items.reduce((total, item) => total + item, 0);
   }, [items]);
   ```
   - The `useMemo` hook memoizes the calculation of the sum of items.
   - The sum is re-calculated only when the `items` array changes.
   - The `console.log` statement helps to demonstrate when the calculation is performed.

3. **useCallback**:
   ```javascript
   const addItem = useCallback(() => {
       setItems(prevItems => [...prevItems, prevItems.length + 1]);
   }, [setItems]);
   ```
   - The `useCallback` hook memoizes the `addItem` function.
   - The function is re-created only when the `setItems` dependency changes.

4. **Component Rendering**:
   ```javascript
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
   ```
   - The component displays the current count and a button to increment it.
   - It displays the sum of items (optimized with `useMemo`).
   - It provides a button to add a new item to the list (optimized with `useCallback`).
   - It renders the list of items.

### Summary

- **`useMemo`**: Used to memoize expensive calculations, recomputing only when dependencies change.
- **`useCallback`**: Used to memoize functions, preventing unnecessary re-creations on each render.
- **Performance Optimization**: These hooks help to optimize performance by avoiding unnecessary re-renders and re-computations.

This component shows how to use `useMemo` and `useCallback` to improve performance in a React application.