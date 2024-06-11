React is declarative because you describe *what* the UI should look like, and React handles the *how*. For example:

### Declarative in React:
```jsx
const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
```

### Imperative in JavaScript:
```html
<div>
  <p id="text">You clicked 0 times</p>
  <button id="button">Click me</button>
</div>

<script>
  let count = 0;
  const text = document.getElementById('text');
  const button = document.getElementById('button');

  button.addEventListener('click', () => {
    count += 1;
    text.textContent = `You clicked ${count} times`;
  });
</script>
```

### Benefits:
- **Readability**: Clear and easy to understand.
- **Maintainability**: Less error-prone.
- **Abstraction**: No direct DOM manipulation needed.
- **Reactivity**: Efficient updates with virtual DOM.

React's declarative nature simplifies UI development by focusing on the end result, making code easier to write and maintain.