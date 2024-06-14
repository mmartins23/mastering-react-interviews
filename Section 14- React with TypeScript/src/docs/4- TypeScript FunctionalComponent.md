# Creating TypeScript Functional Component


#### Define Props Interface and Create Functional Component

```typescript
// Greeting.tsx

import React from 'react';

interface GreetingProps {
  name: string;
}

const Greeting = (props: GreetingProps) => {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
    </div>
  );
};

export default Greeting;
```

#### Use the Component

```typescript
// App.tsx

import React from 'react';
import Greeting from './Greeting';

const App = () => {
  return (
    <div className="App">
      <Greeting name="World" />
    </div>
  );
};

export default App;
```

### Summary

- **Step 1**: In `Greeting.tsx`, we define `GreetingProps` interface to type-check props directly inside the `Greeting` component function.
- **Step 2**: In `App.tsx`, we import and use the `Greeting` component without explicitly using `React.FC`, demonstrating a straightforward approach to creating and using functional components in a React application.

This method ensures TypeScript type safety while maintaining clarity and simplicity in defining functional components.