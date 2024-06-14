# Rules of Hooks

Hooks are special functions in React, a popular JavaScript library for building user interfaces. They allow you to "hook into" React's state and lifecycle features from function components. Before hooks, you could only use these features in class components. Here are the key rules of hooks in React:

### 1. **Only Call Hooks at the Top Level**
   - **Do not call Hooks inside loops, conditions, or nested functions.** Always use hooks at the top level of your React function to ensure they are called in the same order each time a component renders. This rule is critical to maintaining the state and lifecycle of hooks correctly.

   ```javascript
   // Correct
   function MyComponent() {
     const [count, setCount] = useState(0);

     // Correct place to use a hook
     useEffect(() => {
       document.title = `You clicked ${count} times`;
     }, [count]);

     return (
       <div>
         <p>You clicked {count} times</p>
         <button onClick={() => setCount(count + 1)}>
           Click me
         </button>
       </div>
     );
   }

   // Incorrect
   function MyComponent() {
     const [count, setCount] = useState(0);

     if (count > 0) {
       // Incorrect place to use a hook
       useEffect(() => {
         document.title = `You clicked ${count} times`;
       }, [count]);
     }

     return (
       <div>
         <p>You clicked {count} times</p>
         <button onClick={() => setCount(count + 1)}>
           Click me
         </button>
       </div>
     );
   }
   ```

### 2. **Only Call Hooks from React Functions**
   - **Do not call Hooks from regular JavaScript functions.** Instead, call Hooks from React function components or custom hooks.

   ```javascript
   // Correct
   function MyComponent() {
     const [count, setCount] = useState(0);

     useEffect(() => {
       document.title = `You clicked ${count} times`;
     }, [count]);

     return (
       <div>
         <p>You clicked {count} times</p>
         <button onClick={() => setCount(count + 1)}>
           Click me
         </button>
       </div>
     );
   }

   // Custom Hook
   function useCustomHook() {
     const [data, setData] = useState(null);
     useEffect(() => {
       fetchSomeData().then(response => setData(response));
     }, []);
     return data;
   }

   // Incorrect
   function regularFunction() {
     const [count, setCount] = useState(0); // This will cause an error

     return count;
   }
   ```

### Commonly Used Hooks
1. **useState:** Manages state in a functional component.
   ```javascript
   const [state, setState] = useState(initialState);
   ```
   
2. **useEffect:** Performs side effects in function components (like fetching data or directly interacting with the DOM).
   ```javascript
   useEffect(() => {
     // effect
     return () => {
       // cleanup
     };
   }, [dependencies]);
   ```

3. **useContext:** Accesses the context in functional components.
   ```javascript
   const value = useContext(MyContext);
   ```

4. **useReducer:** Manages state with a reducer function, useful for more complex state logic.
   ```javascript
   const [state, dispatch] = useReducer(reducer, initialArg, init);
   ```

5. **useCallback:** Memoizes callback functions to prevent them from being recreated on every render.
   ```javascript
   const memoizedCallback = useCallback(() => {
     doSomething(a, b);
   }, [a, b]);
   ```

6. **useMemo:** Memoizes values to prevent expensive calculations on every render.
   ```javascript
   const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
   ```

7. **useRef:** Creates a mutable object that persists across renders, often used to access DOM elements directly.
   ```javascript
   const myRef = useRef(initialValue);
   ```

By following these rules and using these hooks, you can effectively manage state and lifecycle in React functional components, making your code more readable and maintainable.