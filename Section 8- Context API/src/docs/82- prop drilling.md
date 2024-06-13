Prop drilling is a term in React development that refers to the process of passing data from a parent component to a deeply nested child component through multiple intermediate components. This can make the code difficult to manage and maintain, as each intermediate component needs to pass the props down even if it doesn't need them for its own functionality.

Here's a basic example to illustrate prop drilling:

### Example Without Prop Drilling

First, let's consider a simple case where there is no prop drilling:

```jsx
import React from 'react';

// Component C directly receives and uses the prop.
function ComponentC({ data }) {
  return <div>Data: {data}</div>;
}

// Component B simply renders Component C
function ComponentB({ data }) {
  return <ComponentC data={data} />;
}

// Component A simply renders Component B
function ComponentA({ data }) {
  return <ComponentB data={data} />;
}

// App component renders Component A with the initial data
function App() {
  const data = "Hello, World!";
  return <ComponentA data={data} />;
}

export default App;
```

In this example, `data` is passed from `App` down to `ComponentC` through `ComponentA` and `ComponentB`, even though `ComponentA` and `ComponentB` don't use it themselves.

### Prop Drilling

Here's a more complex example that illustrates prop drilling:

```jsx
import React from 'react';

// Component F directly receives and uses the prop.
function ComponentF({ data }) {
  return <div>Data: {data}</div>;
}

// Component E renders Component F, passing down the prop.
function ComponentE({ data }) {
  return <ComponentF data={data} />;
}

// Component D renders Component E, passing down the prop.
function ComponentD({ data }) {
  return <ComponentE data={data} />;
}

// Component C renders Component D, passing down the prop.
function ComponentC({ data }) {
  return <ComponentD data={data} />;
}

// Component B renders Component C, passing down the prop.
function ComponentB({ data }) {
  return <ComponentC data={data} />;
}

// Component A renders Component B, passing down the prop.
function ComponentA({ data }) {
  return <ComponentB data={data} />;
}

// App component renders Component A with the initial data
function App() {
  const data = "Hello, Prop Drilling!";
  return <ComponentA data={data} />;
}

export default App;
```

In this example, `data` is passed through multiple levels: from `App` to `ComponentA`, then `ComponentB`, `ComponentC`, `ComponentD`, `ComponentE`, and finally to `ComponentF`.