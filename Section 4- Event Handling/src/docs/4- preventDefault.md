# How to prevent the default behaviour of an element (e.g form)

To prevent the default behavior of an element, such as a form submission, you can use the `e.preventDefault()` method in the event handler function. This method stops the browser's default action associated with the event.

### Code Example
```javascript
const PreventDefault = () => {
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
        console.log("Form submitted");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" />
            <br />
            <input type="text" />
            <br />
            <button>Send</button>
        </form>
    );
};

export default PreventDefault;
```

### Explanation

1. **Event Handler Function**:
   ```javascript
   const handleSubmit = (e) => {
       e.preventDefault(); // Prevents the default form submission behavior
       console.log("Form submitted");
   };
   ```
   - `handleSubmit` is the event handler function for the form's `onSubmit` event.
   - The parameter `e` is the event object.
   - Calling `e.preventDefault()` inside this function prevents the default behavior of the form, which is to submit the form and reload the page.

2. **Form Element**:
   ```javascript
   <form onSubmit={handleSubmit}>
       <input type="text" />
       <br />
       <input type="text" />
       <br />
       <button>Send</button>
   </form>
   ```
   - The `form` element has an `onSubmit` event handler that is set to `handleSubmit`.
   - When the form is submitted (e.g., by clicking the "Send" button), the `handleSubmit` function is called.

### Detailed Steps

1. **Form Submission Attempt**:
   - When the user clicks the "Send" button, the form tries to submit.

2. **Event Handling**:
   - The `handleSubmit` function is triggered because it is assigned to the form's `onSubmit` event.

3. **Prevent Default Behavior**:
   - Inside the `handleSubmit` function, `e.preventDefault()` is called.
   - This method prevents the browser from performing the default form submission action.

4. **Console Logging**:
   - After preventing the default behavior, `console.log("Form submitted");` is executed, logging the message to the console.

### Summary

To prevent the default behavior of an element, such as a form, you use the `e.preventDefault()` method within the event handler function. In the provided example, the default form submission is prevented by calling `e.preventDefault()` inside the `handleSubmit` function, allowing you to handle the form submission in a custom way without reloading the page.