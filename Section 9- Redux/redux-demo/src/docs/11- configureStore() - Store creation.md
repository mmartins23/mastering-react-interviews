Creating a Redux store using the Redux Toolkit is straightforward with the `configureStore` function. This function simplifies the setup process and includes good default settings, such as combining reducers and integrating middleware.

Here’s how you can create a Redux store using `configureStore` and integrate it into a React application:

### Step-by-Step Guide

1. **Install Redux Toolkit and React-Redux:**

   Ensure you have `@reduxjs/toolkit` and `react-redux` installed:

   ```bash
   npm install @reduxjs/toolkit react-redux
   ```

2. **Create the Slices:**

   Define your slices (as in your examples).

   **loginSlice.js:**

   ```javascript
   import { createSlice } from "@reduxjs/toolkit";

   const initialState = {
       users: ['admin', 'manager', 'end-user'],
       loginDet: 'None'
   };

   const loginSlice = createSlice({
       name: 'login',
       initialState,
       reducers: {
           userLogin: (state, action) => {
               state.loginDet = action.payload.loginDet;
           }
       }
   });

   export const { userLogin } = loginSlice.actions;
   export default loginSlice.reducer;
   ```

   **productSlice.js:**

   ```javascript
   import { createSlice } from "@reduxjs/toolkit";

   const initialState = {
       products: [
           { pName: 'Apple', price: 20 },
           { pName: 'Banana', price: 3 },
           { pName: 'Orange', price: 10 },
           { pName: 'Grapes', price: 8 },
           { pName: 'Mango', price: 45 }
       ],
       cart: [],
       total: 0,
   };

   const productSlice = createSlice({
       name: 'product',
       initialState,
       reducers: {
           purchase: (state, action) => {
               state.cart.push(action.payload);
               state.total += parseInt(action.payload.price);
           },
           deleteItem: (state, action) => {
               state.cart = state.cart.filter((i, index) => index !== action.payload.index);
               state.total -= action.payload.price;
           }
       }
   });

   export const { purchase, deleteItem } = productSlice.actions;
   export default productSlice.reducer;
   ```

3. **Configure the Store:**

   Set up the store using `configureStore`.

   ```javascript
   import { configureStore } from '@reduxjs/toolkit';
   import loginReducer from './store/loginSlice';
   import productReducer from './store/productSlice';

   const store = configureStore({
       reducer: {
           pr: productReducer,
           lr: loginReducer
       }
   });

   export default store;
   ```

4. **Set Up React Application:**

   Wrap your React application with the `Provider` component from `react-redux` and pass the configured store to it.

   ```javascript
   import React from 'react';
   import ReactDOM from 'react-dom/client';
   import './index.css';
   import App from './App';
   import { Provider } from 'react-redux';
   import store from './store';

   const root = ReactDOM.createRoot(document.getElementById('root'));
   root.render(
       <Provider store={store}>
           <App />
       </Provider>
   );
   ```

### Explanation:

1. **Slices:**
   - `loginSlice` and `productSlice` contain the state and reducers for their respective parts of the state.

2. **Store Configuration:**
   - `configureStore` is used to create the Redux store. It automatically sets up the store with good default settings, including combining the reducers from the slices.

3. **Provider Setup:**
   - The `Provider` component from `react-redux` makes the Redux store available to the rest of the app.

By following these steps, you have successfully created a Redux store using Redux Toolkit and integrated it into a React application. This setup simplifies managing and scaling your state as your application grows.