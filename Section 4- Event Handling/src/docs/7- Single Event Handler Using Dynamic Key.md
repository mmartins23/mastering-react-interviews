# Single Event Handler Using Dynamic Key

### Single Event Handler:

In React, it's common to use a single event handler function to handle events from multiple input fields. This approach simplifies the code and improves maintainability.

### Dynamic Keys:

Using dynamic keys allows us to access and update object properties dynamically, based on some variable or expression. In the context of your example, we're dynamically updating the state object (`formData`) based on the `name` attribute of the input fields.

### Explanation:

```javascript
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value
    }));
};
```

- **`handleChange` Function**:
  - This function is responsible for handling changes in the input fields.
  - It takes the event (`e`) as its parameter, which contains information about the target input field.
  
- **Destructuring**:
  - `const { name, value } = e.target;`: Destructures the `name` and `value` properties from the target input field.

- **Updating State**:
  - `setFormData((prevData) => ({ ...prevData, [name]: value }));`:
    - This line updates the `formData` state.
    - It uses the callback form of `setFormData` to ensure we're working with the most up-to-date state.
    - We spread the previous state (`prevData`) and update the property specified by the `name` attribute of the input field with the new `value`.

### Summary:

- **Single Event Handler**: The `handleChange` function is a single event handler that manages changes for both "Name" and "Email" input fields.
- **Dynamic Keys**: By using dynamic keys (`[name]`), we dynamically update the state object (`formData`) based on the `name` attribute of the input fields.
- **Efficient State Update**: This approach ensures that we efficiently update the state in React, maintaining the immutability of state and triggering proper re-renders.

Your implementation demonstrates a common pattern used in React for handling form inputs efficiently and dynamically.