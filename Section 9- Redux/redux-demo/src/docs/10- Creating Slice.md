1. **What is a Redux State Slice? How do you create it?**

A Redux state slice is a modular section of the Redux state that handles a specific part of the state and the logic related to that part. It includes the initial state, reducers to update the state, and actions to trigger these reducers. In Redux Toolkit, a state slice is created using the `createSlice` function.

Here's how to create a state slice using `createSlice`:

```javascript
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the slice
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

// Create a slice
const productSlice = createSlice({
    name: 'product', // Name of the slice
    initialState: initialState, // Initial state
    reducers: { // Reducers to handle actions
        purchase: (state, action) => {
            state.cart = [...state.cart, action.payload];
            state.total = state.total + parseInt(action.payload.price);
        },
        deleteItem: (state, action) => {
            state.cart = state.cart.filter((i, index) => index !== action.payload.index);
            state.total = state.total - action.payload.price;
        }
    }
});

// Export actions and reducer
export const { purchase, deleteItem } = productSlice.actions;
export default productSlice.reducer;
```

Another example:

```javascript
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the slice
const initialState = {
    users: ['admin', 'manager', 'end-user'],
    loginDet: 'None'
};

// Create a slice
const loginSlice = createSlice({
    name: 'login', // Name of the slice
    initialState: initialState, // Initial state
    reducers: { // Reducers to handle actions
        userLogin: (state, action) => {
            state.loginDet = action.payload.loginDet;
        }
    }
});

// Export actions and reducer
export const { userLogin } = loginSlice.actions;
export default loginSlice.reducer;
```

2. **How the Immutable State is Managed Despite Direct State Changes Inside a Slice Reducer?**

Redux Toolkit uses the `immer` library under the hood, which allows you to write reducers in a way that appears to "mutate" the state directly, but actually applies changes immutably. When you modify the state directly in a reducer, `immer` tracks those changes and produces a new immutable state object.

Here’s how it works in your example:

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
    initialState: initialState,
    reducers: {
        purchase: (state, action) => {
            state.cart.push(action.payload); // Immer manages immutability
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

In the `purchase` reducer, you can see that `state.cart.push(action.payload)` looks like a direct state mutation, but `immer` ensures that the state remains immutable. It keeps track of changes and produces a new state object, preserving immutability.

In summary:
- **Redux State Slice:** A modular part of the Redux state managed by `createSlice` which includes initial state, reducers, and actions.
- **Immutable State Management:** Handled by `immer` in Redux Toolkit, allowing direct-looking state mutations while maintaining immutability.