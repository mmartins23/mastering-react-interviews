# Creating Components - Users

To break down the process of creating and using a separate `User` component, let's go through the steps and explain the changes made to your code:

### Step-by-Step Explanation

1. **Import Statements:**
   - Import necessary modules from React and a CSS file for styling.
   - Import the `User` component from the `./components/User` file.

   ```jsx
   import { useState } from 'react';
   import './App.css';
   import User from './components/User';
   ```

2. **Component Definition:**
   - Define a functional component named `App`.

   ```jsx
   function App() {
   ```

3. **State Initialization:**
   - Use the `useState` hook to create a state variable `users` and a function `setUsers` to update it.
   - Initialize `users` as an empty array.

   ```jsx
   const [users, setUsers] = useState([]);
   ```

4. **Fetch Users Function:**
   - Define the `fetchUsers` function, which will be called when the button is clicked.
   - Inside this function, use the `fetch` API to get user data from `https://jsonplaceholder.typicode.com/users`.

     ```jsx
     const fetchUsers = () => {
       fetch('https://jsonplaceholder.typicode.com/users')
         .then(response => response.json())
         .then(json => setUsers(json))
         .catch(error => console.error('Error fetching users:', error));
     };
     ```

5. **Render Method:**
   - The `return` statement of the component contains JSX to render the UI.
   - A `div` element with the class name `App` wraps the component content.

   ```jsx
   return (
     <div className="App">
   ```

6. **Button Element:**
   - A `button` element is rendered, with an `onClick` event handler that calls `fetchUsers` when clicked.

   ```jsx
   <button onClick={fetchUsers}>Get Users</button>
   ```

7. **Displaying User Data with User Component:**
   - The `users` state, which is an array, is mapped to `User` components.
   - For each user object in the `users` array, a `User` component is created and passed the `user` object as a prop.
   - Each `User` component is given a unique `key` prop. It's better to use `user.id` instead of `index` for `key`.

   ```jsx
   {users.map(user => (
     <User user={user} key={user.id} />
   ))}
   ```

8. **Component Closure:**
   - Close the `div` and the `return` statement.

   ```jsx
     </div>
   );
   ```

9. **Export Component:**
   - Export the `App` component as the default export of the module.

   ```jsx
   export default App;
   ```

10. **User Component:**
    - Define the `User` component in a separate file (`./components/User.js`).
    - The `User` component receives a `user` prop and displays the user's name, username, and email.

    ```jsx
    import React from 'react';

    const User = ({ user }) => {
        return (
            <div className="users">
                <h5>Name: {user.name}</h5>
                <h5>Username: {user.username}</h5>
                <h5>Email: {user.email}</h5>
            </div>
        );
    }

    export default User;
    ```

### Summary

This refactored setup separates concerns by moving the user display logic into its own `User` component. The `App` component focuses on fetching and managing user data, while the `User` component handles the rendering of individual user details.

- **App Component:** Handles fetching data and mapping the `users` state to `User` components.
- **User Component:** Receives a `user` object as a prop and displays the user's details.