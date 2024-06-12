In the provided example, a React component is implemented with multiple state variables to manage form input values. Here’s a detailed explanation of how it works:

### Code Example
```javascript
import { useState } from 'react';

const FormMultipleState = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        console.log("Form submitted");
        console.log("Name:", name);
        console.log("Email:", email);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <br />
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                </div>
                <br />
                <div>
                    <label>
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormMultipleState;
```

### Explanation

1. **State Initialization**:
   ```javascript
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   ```
   - These lines declare two state variables, `name` and `email`, with their respective setter functions `setName` and `setEmail` using the `useState` hook. Initially, both states are set to empty strings.

2. **Form Submission Handler**:
   ```javascript
   const handleSubmit = (e) => {
       e.preventDefault(); // Prevent the default form submission behavior
       console.log("Form submitted");
       console.log("Name:", name);
       console.log("Email:", email);
   };
   ```
   - The `handleSubmit` function is called when the form is submitted.
   - `e.preventDefault()` prevents the default behavior of the form, which is to submit and reload the page.
   - Instead, the function logs a message and the form data (name and email) to the console.

3. **Form and Input Elements**:
   ```javascript
   <form onSubmit={handleSubmit}>
       <div>
           <br />
           <label>
               Name:
               <input
                   type="text"
                   value={name}
                   onChange={(e) => setName(e.target.value)}
               />
           </label>
       </div>
       <br />
       <div>
           <label>
               Email:
               <input
                   type="email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
               />
           </label>
       </div>
       <button type="submit">Submit</button>
   </form>
   ```
   - The `form` element has an `onSubmit` event handler that is set to `handleSubmit`.
   - Inside the form, there are two input fields: one for the name and one for the email.
   - The `value` prop of each input is bound to its respective state variable (`name` and `email`).
   - The `onChange` event handlers update the state variables as the user types.

### Detailed Steps

1. **Input Change Handling**:
   - When the user types in the name input field, the `onChange` event is triggered.
   - The event handler `onChange={(e) => setName(e.target.value)}` updates the `name` state with the current input value.
   - Similarly, the `email` state is updated when the user types in the email input field.

2. **Form Submission Attempt**:
   - When the user clicks the "Submit" button, the form tries to submit.

3. **Event Handling**:
   - The `handleSubmit` function is triggered because it is assigned to the form's `onSubmit` event.

4. **Prevent Default Behavior**:
   - Inside the `handleSubmit` function, `e.preventDefault()` is called to prevent the default form submission action.

5. **Console Logging**:
   - After preventing the default behavior, `console.log("Form submitted");` is executed.
   - The current values of the `name` and `email` states are logged to the console.

### Summary

This example demonstrates how to use multiple state variables to manage form inputs in React and how to prevent the default form submission behavior using `e.preventDefault()` in the `handleSubmit` function. This approach allows for custom handling of form data and provides a more dynamic and controlled user experience.