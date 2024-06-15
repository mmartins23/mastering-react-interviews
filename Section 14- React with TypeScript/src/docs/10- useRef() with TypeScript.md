### Using `useRef` with TypeScript

The `useRef` hook in React is often used to directly access and interact with DOM elements. Below is an example demonstrating how to use `useRef` to focus an input element when the component mounts.

#### Example Code:

```tsx
import React, { useRef, useEffect } from 'react';

const FocusInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null); // Declare useRef with type annotation for HTML input element

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focus the input element when the component mounts
    }
  }, []);

  return (
    <div>
      <h2>Focus Input Example</h2>
      <input ref={inputRef} type="text" placeholder="Focus me on load" />
    </div>
  );
};

export default FocusInput;
```

### Explanation:

1. **Import Statements**: Import `useRef` and `useEffect` from `react`.

2. **Declare `useRef` with Type Annotation**:
   ```typescript
   const inputRef = useRef<HTMLInputElement>(null);
   ```
   - This declares a ref for an HTML input element, initialized to `null`.

3. **Use `useEffect` to Focus Input**:
   ```typescript
   useEffect(() => {
     if (inputRef.current) {
       inputRef.current.focus();
     }
   }, []);
   ```
   - `useEffect` runs after the initial render. If `inputRef.current` is not `null`, it calls the `focus` method to focus the input element.

4. **Attach `ref` to Input Element**:
   ```typescript
   <input ref={inputRef} type="text" placeholder="Focus me on load" />
   ```
   - The `ref` attribute is used to attach the `inputRef` to the input element, allowing direct manipulation.

This example ensures the input field is automatically focused when the component mounts, providing a clear demonstration of how to use `useRef` with TypeScript in a React functional component.