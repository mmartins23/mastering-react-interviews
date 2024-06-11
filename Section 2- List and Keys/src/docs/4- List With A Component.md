To render a list with a component in React, you can create a separate component for each item in the list and then use the `map` method to render each item. Here's a concise example to demonstrate this approach:

### Example: List with a Component

1. **Define the Item Component**:
   Create a component to represent each item in the list.

   ```javascript
   import React from 'react';

   const ProductItem = ({ product }) => {
       return (
           <li>
               {product.name}
           </li>
       );
   }

   export default ProductItem;
   ```

2. **Define the List Component**:
   Use the `ProductItem` component to render each item in the list.

   ```javascript
   import React, { useState } from 'react';
   import ProductItem from './ProductItem'; // Adjust the path as necessary

   const Products = () => {
       const fruits = [
           { id: 1, name: "Apple" },
           { id: 2, name: "Banana" },
           { id: 3, name: "Coconut" },
           { id: 4, name: "Mango" }
       ];
       const [products] = useState(fruits);

       return (
           <div>
               <ul>
                   {products.map(product => (
                       <ProductItem key={product.id} product={product} />
                   ))}
               </ul>
           </div>
       );
   }

   export default Products;
   ```

### Explanation

1. **ProductItem Component**:
   - This component receives a `product` prop and renders it as a list item.
   
   ```javascript
   const ProductItem = ({ product }) => {
       return (
           <li>
               {product.name}
           </li>
       );
   }
   ```

2. **Products Component**:
   - This component initializes a state with a list of fruits.
   - It uses the `map` method to iterate over the `products` array and renders a `ProductItem` for each product.
   - Each `ProductItem` receives a unique `key` prop (using `product.id`) and the product data.

   ```javascript
   const Products = () => {
       const fruits = [
           { id: 1, name: "Apple" },
           { id: 2, name: "Banana" },
           { id: 3, name: "Coconut" },
           { id: 4, name: "Mango" }
       ];
       const [products] = useState(fruits);

       return (
           <div>
               <ul>
                   {products.map(product => (
                       <ProductItem key={product.id} product={product} />
                   ))}
               </ul>
           </div>
       );
   }
   ```

### Summary

- **Separation of Concerns**: Using a separate component (`ProductItem`) for list items helps keep the code organized and modular.
- **Unique Keys**: Providing a unique `key` prop (such as `product.id`) helps React efficiently update and manage the list.
- **State Management**: The `Products` component uses the `useState` hook to manage the list of products. 

This approach ensures that each item is rendered using a dedicated component, which improves readability and maintainability.