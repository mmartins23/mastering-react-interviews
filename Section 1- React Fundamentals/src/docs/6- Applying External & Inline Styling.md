### Applying External and Inline Styling in React

### 1. External Styling

External styling in React involves using CSS files to style your components. This approach separates your styles from your JavaScript code, making it easier to manage and reuse styles across multiple components.

#### Steps to Apply External Styling:

1. **Create a CSS File**:
   Create a CSS file (e.g., `styles.css`) with your styles.
   ```css
   /* styles.css */
   .container {
       padding: 20px;
       background-color: #f0f0f0;
   }

   .button {
       padding: 10px 20px;
       background-color: #007bff;
       color: white;
       border: none;
       border-radius: 4px;
       cursor: pointer;
   }

   .button:hover {
       background-color: #0056b3;
   }
   ```

2. **Import the CSS File in Your Component**:
   Import the CSS file at the top of your component file.
   ```javascript
   import './styles.css';

   export const StyledComponent = () => {
       return (
           <div className="container">
               <button className="button">Click Me</button>
           </div>
       );
   };
   ```

### 2. Inline Styling

Inline styling in React involves adding styles directly to the elements via the `style` attribute. This approach can be useful for dynamic styles or when you want to apply styles conditionally.

#### Steps to Apply Inline Styling:

1. **Use the `style` Attribute**:
   Use the `style` attribute to add styles directly to the element. The `style` attribute accepts a JavaScript object where the keys are camelCased CSS property names.
   ```javascript
   export const InlineStyledComponent = () => {
       const containerStyle = {
           padding: '20px',
           backgroundColor: '#f0f0f0',
       };

       const buttonStyle = {
           padding: '10px 20px',
           backgroundColor: '#007bff',
           color: 'white',
           border: 'none',
           borderRadius: '4px',
           cursor: 'pointer',
       };

       return (
           <div style={containerStyle}>
               <button style={buttonStyle}>Click Me</button>
           </div>
       );
   };
   ```

#### Example with Both External and Inline Styling:

```javascript
import './styles.css';

export const CombinedStyledComponent = () => {
    const inlineStyle = {
        color: 'red',
        fontWeight: 'bold'
    };

    return (
        <div className="container">
            <button className="button" style={inlineStyle}>Click Me</button>
        </div>
    );
};
```

### Summary

- **External Styling**: Use CSS files to define styles and import them into your components.
- **Inline Styling**: Use the `style` attribute to apply styles directly to elements as JavaScript objects.

Both methods can be used together to take advantage of the benefits of each, providing flexibility in how you style your React components.