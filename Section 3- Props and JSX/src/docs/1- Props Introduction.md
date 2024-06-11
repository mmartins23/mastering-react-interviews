In React, "props" (short for properties) are used to pass data from a parent component to a child component. Props are read-only and cannot be modified by the child component receiving them. They allow components to be dynamic and reusable by enabling the parent to control the data that the child component displays or uses.

### Basic Example of Using Props

1. **Parent Component**: Passes props to the child component.
2. **Child Component**: Receives and uses the props.

#### Step 1: Create the Child Component

The child component receives props and uses them.

```javascript
import React from 'react';

const Greeting = ({ name }) => {
    return <h1>Hello, {name}!</h1>;
}

export default Greeting;
```

In this example, `Greeting` is a functional component that accepts `name` as a prop and displays it.

#### Step 2: Create the Parent Component

The parent component passes props to the child component.

```javascript
import React from 'react';
import Greeting from './Greeting'; // Adjust the path as necessary

const App = () => {
    return (
        <div>
            <Greeting name="Alice" />
            <Greeting name="Bob" />
            <Greeting name="Charlie" />
        </div>
    );
}

export default App;
```

In this example, `App` is a functional component that renders the `Greeting` component three times, passing different values for the `name` prop each time.

### Explanation

1. **Child Component (Greeting)**:
   - The child component (`Greeting`) accepts a `name` prop and uses it within the JSX to display a personalized greeting.
   - Props are accessed directly in the function parameter using destructuring.

   ```javascript
   const Greeting = ({ name }) => {
       return <h1>Hello, {name}!</h1>;
   }
   ```

2. **Parent Component (App)**:
   - The parent component (`App`) renders the `Greeting` component multiple times, passing different values for the `name` prop each time.
   - The `name` prop is specified as an attribute on the `Greeting` component.

   ```javascript
   const App = () => {
       return (
           <div>
               <Greeting name="Alice" />
               <Greeting name="Bob" />
               <Greeting name="Charlie" />
           </div>
       );
   }
   ```

### Using Props for Multiple Values

Props can also be used to pass multiple values to the child component.

#### Step 1: Update the Child Component

Modify the child component to accept and use multiple props.

```javascript
const UserCard = ({ name, age }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
        </div>
    );
}

export default UserCard;
```

#### Step 2: Update the Parent Component

Pass multiple props to the child component.

```javascript
const App = () => {
    return (
        <div>
            <UserCard name="Alice" age={25} />
            <UserCard name="Bob" age={30} />
            <UserCard name="Charlie" age={35} />
        </div>
    );
}

export default App;
```

### Summary

- **Props**: Allow data to be passed from parent to child components, making components dynamic and reusable.
- **Read-Only**: Props are read-only in the child component, ensuring that data flow is unidirectional (from parent to child).
- **Destructuring**: Props can be destructured in the function parameter for cleaner and more readable code.

Using props, you can create flexible and reusable components in React, which can be customized by passing different data from their parent components.