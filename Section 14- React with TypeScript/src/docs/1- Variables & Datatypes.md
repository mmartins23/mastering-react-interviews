# Variables & Datatypes

Sure! Let's dive into variables and data types in TypeScript, especially in the context of using React 18 with functional components and hooks.

### Variables in TypeScript

In TypeScript, variables are declared using `let`, `const`, and `var`. However, `let` and `const` are preferred.

- **`let`**: Used to declare variables that can be reassigned. It has block scope.
- **`const`**: Used to declare variables that cannot be reassigned. It also has block scope.
- **`var`**: An older way to declare variables that is function-scoped and has more complex scoping rules. It's generally recommended to avoid using `var`.

### Variable Declarations

```typescript
let mutableVariable: string = "I can change";
const constantVariable: number = 42;

// Reassigning mutableVariable is allowed
mutableVariable = "New value";

// Reassigning constantVariable will cause an error
// constantVariable = 100; // Error
```

### Basic Data Types

TypeScript supports several basic data types, including:

- **`number`**: Represents both integers and floating-point numbers.
- **`string`**: Represents text data.
- **`boolean`**: Represents true/false values.
- **`array`**: Represents a collection of values of a specific type.
- **`tuple`**: Represents an array with a fixed number of elements, where each element may have a different type.
- **`enum`**: Represents a collection of named constants.
- **`any`**: A type that can hold any value. Using `any` disables type checking for that variable.
- **`void`**: Represents the absence of any value, typically used for functions that do not return a value.
- **`null` and `undefined`**: Represents null and undefined values, respectively.
- **`object`**: Represents non-primitive types.

### Data Type Examples

```typescript
let age: number = 30;
let userName: string = "John Doe";
let isLoggedIn: boolean = true;

let numbers: number[] = [1, 2, 3];
let tuple: [string, number] = ["Alice", 25];

enum Color {
  Red,
  Green,
  Blue,
}
let favoriteColor: Color = Color.Green;

let anything: any = "Could be anything";
anything = 42; // Still valid

function logMessage(message: string): void {
  console.log(message);
}

let u: undefined = undefined;
let n: null = null;

let user: object = { name: "Alice", age: 25 };
```

### TypeScript in React (React 18)

In a React application, TypeScript enhances the development experience by providing strong typing and reducing runtime errors. Here’s how you can use TypeScript with React 18:

#### Functional Components with Props

For functional components, you can define the props using TypeScript interfaces or type aliases.

```typescript
import React from 'react';

interface AppProps {
  message: string;
}

const App = ({ message }: AppProps) => {
  return <div>{message}</div>;
};

export default App;
```

#### Hooks with TypeScript

When using hooks, TypeScript can infer the types, but you can also explicitly define them.

```typescript
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
```

### Advanced Types

TypeScript also provides advanced types for more complex scenarios:

- **Union Types**: Allows a variable to be one of several types.
- **Intersection Types**: Combines multiple types into one.
- **Type Aliases**: Defines custom types.
- **Generics**: Allows you to create reusable components and functions with types that are specified when they are used.

### Examples of Advanced Types

```typescript
// Union Type
let mixed: number | string;
mixed = 10;
mixed = "Hello";

// Intersection Type
interface Person {
  name: string;
}

interface Employee {
  employeeId: number;
}

type EmployeePerson = Person & Employee;
let employee: EmployeePerson = { name: "John", employeeId: 123 };

// Type Alias
type StringOrNumber = string | number;
let result: StringOrNumber = "Success";

// Generics
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("Hello");
let numberOutput = identity<number>(42);
```

By using TypeScript with React 18, you can leverage the power of static typing to create more robust and maintainable applications. This includes defining clear types for your component props and state, reducing potential runtime errors, and improving your overall development experience.