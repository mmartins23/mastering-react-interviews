Below is an example of a simple React component that uses `if...else` statements for conditional rendering.

### Example: Conditional Rendering with if...else

```javascript
import React, { useState } from 'react';

const UserGreeting = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleLogin = () => {
        setIsLoggedIn(prevState => !prevState);
    };

    const renderContent = () => {
        if (isLoggedIn) {
            return <h1>Welcome back, user!</h1>;
        } else {
            return <h1>Please log in.</h1>;
        }
    };

    return (
        <div>
            {renderContent()}
            <button onClick={toggleLogin}>
                {isLoggedIn ? 'Log Out' : 'Log In'}
            </button>
        </div>
    );
};

export default UserGreeting;
```

### Explanation:

1. **State Declaration**:
    ```javascript
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    ```
    - A piece of state `isLoggedIn` is declared, initialized to `false`.
    - `setIsLoggedIn` is the function to update `isLoggedIn`.

2. **Conditional Rendering with if...else**:
    ```javascript
    const renderContent = () => {
        if (isLoggedIn) {
            return <h1>Welcome back, user!</h1>;
        } else {
            return <h1>Please log in.</h1>;
        }
    };
    ```
    - `renderContent` is a helper function that uses an `if...else` statement to return different content based on the `isLoggedIn` state.

3. **Using the Rendered Content**:
    ```javascript
    <div>
        {renderContent()}
        <button onClick={toggleLogin}>
            {isLoggedIn ? 'Log Out' : 'Log In'}
        </button>
    </div>
    ```
    - The component calls `renderContent()` to render the appropriate message.
    - A button is provided to toggle the `isLoggedIn` state.

4. **Button to Toggle State**:
    ```javascript
    <button onClick={toggleLogin}>
        {isLoggedIn ? 'Log Out' : 'Log In'}
    </button>
    ```
    - A button that toggles the `isLoggedIn` state when clicked.
    - The button text changes based on the `isLoggedIn` state.

### Summary:

- **if...else Statement**: Used to conditionally render different elements based on a boolean state.
- **State Management**: `useState` hook manages the `isLoggedIn` state.
- **Helper Function**: `renderContent` encapsulates the conditional rendering logic, improving code readability.

This example illustrates how to use `if...else` statements for conditional rendering in a React component, providing a straightforward way to manage and display different UI states.