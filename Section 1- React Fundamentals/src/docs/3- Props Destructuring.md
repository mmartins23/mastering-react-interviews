### 1. What are Props in a Component?

**Props** (short for properties) are a mechanism in React to pass data from a parent component to a child component. They allow components to be dynamic and reusable by providing them with different pieces of data.

### 2. Destructuring of Props

**Destructuring** is a JavaScript feature that allows you to extract values from objects or arrays into variables. In React, you can destructure props directly in the function parameter list to make the code cleaner and more readable.

### Example: Using Props and Destructuring

Here’s a component `PersonDetails` that uses props to display a person's name and age. The props are destructured in the function parameter list.

#### Component Code:
```javascript
import "./persondetails.css";

export const PersonDetails = ({ name, age }) => {
    return (
        <div className="pers">
            <h3>Name: {name}</h3>
            <h3>Age: {age}</h3>
        </div>
    );
};
```

#### Usage:
```javascript
<PersonDetails name="Anne" age={20} />
<PersonDetails name="Bob" age={22} />
<PersonDetails name="Charles" age={24} />
```

### Explanation:

1. **Passing Props**: 
   ```javascript
   <PersonDetails name="Anne" age={20} />
   ```
   Here, `name` and `age` are props passed to the `PersonDetails` component.

2. **Destructuring Props**: 
   ```javascript
   export const PersonDetails = ({ name, age }) => {
   ```
   Instead of accessing props via `props.name` and `props.age`, we destructure them directly in the function parameters.

3. **Using Props**: 
   ```javascript
   <h3>Name: {name}</h3>
   <h3>Age: {age}</h3>
   ```
   The destructured props `name` and `age` are used to display the person's details.

By using destructuring, the code is cleaner and more concise, making it easier to read and maintain.