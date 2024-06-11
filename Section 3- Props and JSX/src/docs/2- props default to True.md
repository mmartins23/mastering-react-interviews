In React, when you want to pass a boolean prop that defaults to `true`, you can simply use the prop name without assigning a value.

### Example

1. **Child Component**:

```javascript
const Display = ({ isVisible }) => {
    return (
        <div>
            {isVisible && <p>This text is visible.</p>}
        </div>
    );
}

export default Display;
```

2. **Parent Component**:

```javascript
import React from 'react';
import Display from './Display';

const App = () => {
    return (
        <div>
            <Display isVisible /> {/* isVisible defaults to true */}
            <Display isVisible={false} /> {/* isVisible explicitly set to false */}
        </div>
    );
}

export default App;
```

### Summary

- **Boolean Prop**: Use the prop name alone to default to `true`.
- **Explicit False**: Pass `false` explicitly if needed.

```jsx
<Display isVisible /> // Defaults to true
<Display isVisible={false} /> // Explicitly set to false
```