In this project, the delete functionality for cart items is implemented using Redux for state management. Let's break down how this works.

### Key Components:
1. **Action Dispatching in `Cart` Component:**
2. **Handling Actions in Reducer:**

### Action Dispatching in `Cart` Component:
1. **Selectors and Dispatch Hook:**
   - `useSelector`: This hook is used to extract the `cart` state from the Redux store.
   - `useDispatch`: This hook provides the dispatch function to send actions to the Redux store.

2. **Delete Handler:**
   - `deleteHandler`: A function that takes `index` and `price` as arguments and dispatches a `DELETE` action with a payload containing these values.

3. **Rendering Cart Items:**
   - The cart items are rendered using the `map` function. Each item is displayed as a list item (`<li>`).
   - Each list item has an `onClick` event listener that triggers the `deleteHandler` when clicked, passing the index and price of the item.

Here is the `Cart` component code:

```jsx
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const deleteHandler = (index, price) => {
        dispatch({ type: 'DELETE', payLoad: {index, price} })
    }

    return (
        <div className="customDiv">
            <h3>Cart Component</h3>
            <hr />
            <ul>
                {
                    cart.map((product, index) => {
                        return (
                            <li
                                key={index}
                                onClick={() => deleteHandler(index, product.price)}
                            >{product.pName}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Cart;
```

### Handling Actions in Reducer:
The reducer handles the state changes based on the dispatched actions. 

1. **Initial State:**
   - `initData`: Contains the initial state of the application, including `products`, `cart`, and `total`.

2. **Reducer Function:**
   - The reducer function takes the current state and an action as arguments and returns the new state based on the action type.

3. **Action Types:**
   - `'PURCHASE'`: Adds an item to the cart and updates the total price.
   - `'DELETE'`: Removes an item from the cart and updates the total price.

4. **Delete Action Handling:**
   - The `DELETE` action uses the `filter` method to remove the item at the specified index from the cart.
   - It also subtracts the price of the deleted item from the total price.

Here is the reducer code:

```jsx
import { createStore } from "redux";

const initData = {
    products: [
        { pName: 'Apple', price: 20 },
        { pName: 'Banana', price: 3 },
        { pName: 'Orange', price: 10 },
        { pName: 'Grapes', price: 8 },
        { pName: 'Mango', price: 45 }
    ],
    cart: [],
    total: 0
};

const reducer = (state = initData, action) => {
    if (action.type === 'PURCHASE') {
        return {
            ...state,
            cart: [...state.cart, action.payLoad],
            total: state.total + parseInt(action.payLoad.price)
        };
    }
    if (action.type === 'DELETE') {
        return {
            ...state,
            cart: state.cart.filter((i, index) => index !== action.payLoad.index),
            total: state.total - action.payLoad.price
        };
    }
    return state;
};

const store = createStore(reducer);

export default store;
```

### Flow of Event Handling with Redux:
1. **Component Dispatches Action:**
   - The user clicks on a cart item, triggering the `deleteHandler`.
   - `deleteHandler` dispatches the `DELETE` action with the item's index and price.

2. **Action Handled by Reducer:**
   - The reducer receives the `DELETE` action.
   - The reducer updates the state by removing the specified item from the cart and adjusting the total price.

3. **Component Re-renders:**
   - The state changes in the Redux store.
   - The `Cart` component re-renders to reflect the updated cart and total price.

### Dispatching Events with Hooks:
- **useDispatch**: This hook returns a reference to the dispatch function from the Redux store. You use it to dispatch actions from your component.
  - Example:
    ```javascript
    const dispatch = useDispatch();
    dispatch({ type: 'DELETE', payLoad: { index, price } });
    ```
- **useSelector**: This hook extracts data from the Redux store state using a selector function.
  - Example:
    ```javascript
    const cart = useSelector(state => state.cart);
    ```

By using these hooks, you can easily connect your components to the Redux store and dispatch actions to update the state based on user interactions.