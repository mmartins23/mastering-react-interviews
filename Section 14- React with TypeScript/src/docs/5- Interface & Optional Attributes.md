# Creating Products Component with TypeScript

#### Step 1: Define Interface with Optional Attribute

Create a file named `Products.tsx`:

```typescript
// Products.tsx

import React from 'react';

interface Product {
  id: number;
  name: string;
  description?: string; // Optional attribute
}

const Products = ({ id, name, description }: Product) => {
  return (
    <div>
      <h2>Product Details</h2>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      {description && <p>Description: {description}</p>}
    </div>
  );
};

export default Products;
```

### Explanation:

- **Interface `Product`**: Defines the structure of a product object with:
  - `id` (required, number)
  - `name` (required, string)
  - `description` (optional, string)
  
  The `description` attribute is marked as optional using the `?` symbol.

- **Functional Component `Products`**: Accepts props destructured from the `Product` interface. It renders the product details including `id` and `name`, and conditionally renders the `description` if it exists (to demonstrate optional rendering).

#### Step 2: Use the Component

In `App.tsx` or any other component:

```typescript
// App.tsx

import React from 'react';
import './App.css';
import Products from './Products';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Products id={1} name="Laptop" description="A high-performance laptop" />
        <Products id={2} name="Smartphone" />
      </header>
    </div>
  );
};

export default App;
```

### Explanation:

- **Using the `Products` Component**: In `App.tsx`, import the `Products` component and use it multiple times:
  - The first `Products` component includes both required (`id` and `name`) and optional (`description`) attributes.
  - The second `Products` component includes only the required attributes (`id` and `name`), omitting the optional `description`.

### Conclusion

This concise example demonstrates how to create a TypeScript functional component with optional attributes using interfaces. TypeScript's interfaces provide a way to define clear and type-safe props for components, ensuring robustness and clarity in your React application.