# Solving Prop Drilling with Context API

To avoid prop drilling, you can use the Context API in React, which allows you to pass data directly to any component in the component tree without needing to pass props through intermediate components.

Here's how the above example can be refactored using Context API:

***

Certainly! Let's go through each step in detail to refactor the example using the Context API, avoiding prop drilling.

### Step 1: Create Context

**DataContext.js**

1. **Create a Context:** 
   - Context is created using the `createContext` function from React. This function returns a Context object.

2. **Export the Context:**
   - The created context is exported so it can be used in other parts of the application.

```jsx
import { createContext } from 'react';

// Create a Context
const DataContext = createContext();

// Export the Context
export default DataContext;
```

### Step 2: Create Components

Create three separate files for each component: `ComponentA.jsx`, `ComponentB.jsx`, and `ComponentC.jsx`.

**ComponentC.jsx**

1. **Import necessary modules:**
   - Import React and `useContext` hook from React.
   - Import the `DataContext` created earlier.

2. **Use Context to Access Data:**
   - Use the `useContext` hook to consume the context data.
   - Display the data within a div.

```jsx
import React, { useContext } from 'react';
import DataContext from '../DataContext';

function ComponentC() {
  const data = useContext(DataContext);
  return <div>Data: {data}</div>;
}

export default ComponentC;
```

**ComponentB.jsx**

1. **Import necessary modules:**
   - Import React.
   - Import `ComponentC` which will be rendered within `ComponentB`.

2. **Render ComponentC within ComponentB:**

```jsx
import React from 'react';
import ComponentC from './ComponentC';

function ComponentB() {
  return (
    <div>
      <ComponentC />
    </div>
  );
}

export default ComponentB;
```

**ComponentA.jsx**

1. **Import necessary modules:**
   - Import React.
   - Import `ComponentB` which will be rendered within `ComponentA`.

2. **Render ComponentB within ComponentA:**

```jsx
import React from 'react';
import ComponentB from './ComponentB';

function ComponentA() {
  return (
    <div>
      <ComponentB />
    </div>
  );
}

export default ComponentA;
```

### Step 3: Update App Component

**App.jsx**

1. **Import necessary modules:**
   - Import React.
   - Import `ComponentA` which is the top-level component in our component tree.
   - Import the `DataContext`.

2. **Provide Context Value:**
   - Use the `DataContext.Provider` to pass the context value down the component tree.
   - The value provided to the `Provider` will be accessible to all components within its subtree that consume the context.

3. **Render ComponentA within the Provider:**
   - Wrap `ComponentA` with `DataContext.Provider` and pass the context value.

```jsx
import React from 'react';
import ComponentA from './components/ComponentA';
import DataContext from './DataContext';

function App() {
  const data = "Hello, Context API!";
  return (
    <DataContext.Provider value={data}>
      <ComponentA />
    </DataContext.Provider>
  );
}

export default App;
```

### Step 4: Directory Structure

Organize your files as follows to maintain clarity and separation of concerns:

```
/src
  /components
    ComponentA.jsx
    ComponentB.jsx
    ComponentC.jsx
  App.jsx
  DataContext.js
```

### Step 5: Run the Application

1. **Run the Application:**
   - Ensure your development server is running. If you're using Create React App, you can start the server with `npm start` or `yarn start`.
   - The application will render `ComponentA`, which in turn renders `ComponentB`, and `ComponentB` renders `ComponentC`.

2. **Observe the Context in Action:**
   - `ComponentC` will display the data passed through the context.
   - There is no need to pass props down through `ComponentA` and `ComponentB`, simplifying the code and avoiding prop drilling.

This setup leverages the Context API to manage and pass data efficiently across the component tree without the need for prop drilling, which makes the codebase cleaner and easier to maintain.