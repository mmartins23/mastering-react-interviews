Below is an example of a simple React component that uses a `switch` statement for conditional rendering.

### Example: Conditional Rendering with switch...case

```javascript
import React, { useState } from 'react';

const StatusMessage = () => {
    const [status, setStatus] = useState('idle');

    const renderMessage = () => {
        switch (status) {
            case 'idle':
                return <p>Status: Idle</p>;
            case 'loading':
                return <p>Status: Loading...</p>;
            case 'success':
                return <p>Status: Success!</p>;
            case 'error':
                return <p>Status: Error occurred!</p>;
            default:
                return <p>Status: Unknown</p>;
        }
    };

    return (
        <div>
            {renderMessage()}
            <button onClick={() => setStatus('idle')}>Set Idle</button>
            <button onClick={() => setStatus('loading')}>Set Loading</button>
            <button onClick={() => setStatus('success')}>Set Success</button>
            <button onClick={() => setStatus('error')}>Set Error</button>
        </div>
    );
};

export default StatusMessage;
```

### Explanation:

1. **State Declaration**:
    ```javascript
    const [status, setStatus] = useState('idle');
    ```
    - A piece of state `status` is declared, initialized to `'idle'`.
    - `setStatus` is the function to update `status`.

2. **Conditional Rendering with switch...case**:
    ```javascript
    const renderMessage = () => {
        switch (status) {
            case 'idle':
                return <p>Status: Idle</p>;
            case 'loading':
                return <p>Status: Loading...</p>;
            case 'success':
                return <p>Status: Success!</p>;
            case 'error':
                return <p>Status: Error occurred!</p>;
            default:
                return <p>Status: Unknown</p>;
        }
    };
    ```
    - `renderMessage` is a helper function that uses a `switch...case` statement to return different content based on the `status` state.

3. **Using the Rendered Content**:
    ```javascript
    <div>
        {renderMessage()}
        <button onClick={() => setStatus('idle')}>Set Idle</button>
        <button onClick={() => setStatus('loading')}>Set Loading</button>
        <button onClick={() => setStatus('success')}>Set Success</button>
        <button onClick={() => setStatus('error')}>Set Error</button>
    </div>
    ```
    - The component calls `renderMessage()` to render the appropriate message based on the current status.
    - Buttons are provided to change the `status` state.

4. **Buttons to Change State**:
    ```javascript
    <button onClick={() => setStatus('idle')}>Set Idle</button>
    <button onClick={() => setStatus('loading')}>Set Loading</button>
    <button onClick={() => setStatus('success')}>Set Success</button>
    <button onClick={() => setStatus('error')}>Set Error</button>
    ```
    - Each button changes the `status` state to a different value when clicked.

### Summary:

- **switch...case Statement**: Used to conditionally render different elements based on the `status` state.
- **State Management**: `useState` hook manages the `status` state.
- **Helper Function**: `renderMessage` encapsulates the conditional rendering logic using a `switch` statement.

This example illustrates how to use `switch...case` for conditional rendering in a React component, providing a structured way to handle multiple possible states.