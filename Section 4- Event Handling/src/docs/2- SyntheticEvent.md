In React, a `SyntheticEvent` is a cross-browser wrapper around the native browser event. It is used to provide a consistent API regardless of the browser being used. SyntheticEvents are used for performance reasons and to ensure that events behave consistently across different browsers.

### Key Features of SyntheticEvent

1. **Cross-browser Compatibility**: SyntheticEvent normalizes the event properties and behavior across different browsers, providing a consistent API.
2. **Pooling**: SyntheticEvents are pooled for performance reasons. This means that they are reused between different events, reducing the overhead of event handling.

### Common Properties of SyntheticEvent
Some common properties and methods available on a `SyntheticEvent` include:

- `type`: The type of event (e.g., "click", "change").
- `target`: The target element that triggered the event.
- `currentTarget`: The current target element during event bubbling.
- `preventDefault()`: Prevents the default behavior of the event.
- `stopPropagation()`: Stops the event from propagating to parent elements.
- `nativeEvent`: The native browser event.

### Code Example
Let's see a code example demonstrating the use of `SyntheticEvent` in a React component:

```javascript
import React from 'react';

const SyntheticEventExample = () => {
    const handleClick = (event) => {
        // `event` is a SyntheticEvent
        console.log("SyntheticEvent Type:", event.type); // Output: click
        console.log("Event Target:", event.target); // Output: <button>Click Me</button>

        // Prevent the default action
        event.preventDefault();

        // Stop event propagation
        event.stopPropagation();

        // Access the native event
        console.log("Native Event:", event.nativeEvent);
    };

    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
};

export default SyntheticEventExample;
```

### Explanation

1. **Event Handler**: The `handleClick` function is the event handler for the `click` event.
2. **Accessing SyntheticEvent Properties**:
    - `event.type`: Logs the type of the event ("click").
    - `event.target`: Logs the target element of the event (the button that was clicked).
3. **Preventing Default Action**:
    - `event.preventDefault()`: Prevents the default action associated with the event. For example, it can prevent form submission or link navigation.
4. **Stopping Propagation**:
    - `event.stopPropagation()`: Stops the event from bubbling up to parent elements. This is useful when you don't want the event to trigger other event handlers attached to parent elements.
5. **Accessing Native Event**:
    - `event.nativeEvent`: Accesses the underlying native browser event if needed for more advanced use cases.

### Pooling

It's important to note that SyntheticEvents are pooled, meaning their properties might be reused for different events to improve performance. Because of this, you should not rely on the event object outside of the event handler. If you need to use the event object asynchronously, you should store its properties in variables or call `event.persist()` to remove the event from the pool:

```javascript
const handleClick = (event) => {
    event.persist(); // Remove the event from the pool
    setTimeout(() => {
        console.log("SyntheticEvent Type:", event.type); // Output: click
    }, 1000);
};
```

Using `event.persist()` ensures that the event's properties remain available even after the event handler has finished executing.