### 1. How to Create a Global Store?

To create a global store in a React application using Redux, you need to follow these steps:

1. **Install Redux and React-Redux**:
   You need to install Redux and React-Redux libraries. Redux is the state management library, and React-Redux provides bindings to integrate Redux with React.

   ```bash
   npm install redux react-redux
   ```

2. **Define Initial State**:
   Create an initial state object that will hold the initial values for your store.

   ```javascript
   const initialData = {
       products: [
           { pName: 'Apple', price: 20 },
           { pName: 'Banana', price: 3 },
           { pName: 'Orange', price: 10 },
           { pName: 'Grapes', price: 5 },
       ],
       cart: [],
       total: 0
   }
   ```

3. **Create a Reducer Function**:
   A reducer is a function that takes the current state and an action as arguments and returns a new state. Initially, it can simply return the initial state.

   ```javascript
   const reducer = (state = initialData, action) => {
       return state;
   }
   ```

4. **Create the Redux Store**:
   Use the `createStore` method from Redux to create the store and pass the reducer to it.

   ```javascript
   import { createStore } from 'redux';

   const store = createStore(reducer);

   export default store;
   ```

5. **Provide the Store to Your Application**:
   Use the `Provider` component from React-Redux to make the store available to your entire application.

   ```javascript
   import React from 'react';
   import ReactDOM from 'react-dom';
   import { Provider } from 'react-redux';
   import App from './App';
   import store from './store';

   ReactDOM.render(
       <Provider store={store}>
           <App />
       </Provider>,
       document.getElementById('root')
   );
   ```

### 2. Explain the Usage of `redux` - `createStore()` Method

The `createStore` method is a part of the Redux library and is used to create a Redux store, which holds the state of your application. Here is a detailed explanation:

- **Syntax**:
  ```javascript
  const store = createStore(reducer, [preloadedState], [enhancer]);
  ```

- **Parameters**:
  - `reducer`: A reducing function that returns the next state tree, given the current state tree and an action to handle.
  - `preloadedState` (optional): The initial state. You can use this to hydrate the state of the store from the server or to restore a previously serialized user session.
  - `enhancer` (optional): The store enhancer. You can use this to apply middleware or other store enhancers.

- **Returns**:
  - The `createStore` method returns a Redux store that has a few methods:
    - `getState()`: Returns the current state of the store.
    - `dispatch(action)`: Dispatches an action to change the state.
    - `subscribe(listener)`: Adds a change listener. It will be called any time an action is dispatched, and the state might have changed.
    - `replaceReducer(nextReducer)`: Replaces the current reducer with a new one.

### Example

```javascript
import { createStore } from 'redux';

const initialData = {
    products: [
        { pName: 'Apple', price: 20 },
        { pName: 'Banana', price: 3 },
        { pName: 'Orange', price: 10 },
        { pName: 'Grapes', price: 5 },
    ],
    cart: [],
    total: 0
}

const reducer = (state = initialData, action) => {
    switch (action.type) {
        // Define case actions to handle different actions
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;
```

In this example:
- We define an initial state (`initialData`).
- We create a reducer (`reducer`) that handles state changes.
- We create a store using `createStore(reducer)`.
- We export the store for use in our application.

By following these steps, you can create and configure a global store using Redux in a React application.