### Explaining `useSelector()`

The `useSelector` hook is a function provided by the `react-redux` library, which is used to extract data from the Redux store state. It is a hook version of the `connect` function and allows functional components to subscribe to the Redux store.

### How `useSelector()` is Used in the Project

Here’s how `useSelector` is used in the given components:

1. **Total Component**:
    ```javascript
    import { useSelector } from 'react-redux';

    const Total = () => {
        const total = useSelector(state => state.total);
        return (
            <div className="customDiv">
                <h3>Total Component</h3>
                <hr/>
                <h2>Total: {total}</h2>
            </div>
        )
    }

    export default Total;
    ```
    - **Explanation**: This component uses `useSelector` to access the `total` value from the Redux store. It then displays this total value.

2. **Purchase Component**:
    ```javascript
    import { useSelector } from 'react-redux';

    const Purchase = () => {
        const products = useSelector(state => state.products);
        return (
            <div className="customDiv">
                <h3>Purchase Component</h3>
                <hr/>
                <select>
                    {
                        products.map((product, index) => {
                            return (
                                <option value={product.price} key={index}>
                                    {product.pName} - ${product.price}
                                </option>
                            )
                        })
                    }
                </select>
            </div>
        )
    }

    export default Purchase;
    ```
    - **Explanation**: This component uses `useSelector` to access the `products` array from the Redux store. It then maps over the products to create a dropdown selection of product names and prices.

3. **Cart Component**:
    ```javascript
    import { useSelector } from 'react-redux';

    const Cart = () => {
        const cart = useSelector(state => state.cart);

        return (
            <div className="customDiv">
                <h3>Cart Component</h3>
                <hr />
                <ul>
                    {
                        cart.map((product, index) => {
                            return (
                                <li key={index}>{product.pName}</li>
                            )
                        })
                    }
                </ul>
            </div >
        )
    }

    export default Cart;
    ```
    - **Explanation**: This component uses `useSelector` to access the `cart` array from the Redux store. It then maps over the cart items to display them in an unordered list.

### Setting up the Store

Here’s the setup of the Redux store:
```javascript
import { createStore } from 'redux';

const initialData = {
    products: [
        { pName: 'Apple', price: 20 },
        { pName: 'Banana', price: 3 },
        { pName: 'Orange', price: 10 },
        { pName: 'Grapes', price: 5 },
        { pName: 'Lemon', price: 1 },
    ],
    cart: [],
    total: 0
}

const reducer = (state = initialData, action) => {
    return state;
}

const store = createStore(reducer);

export default store;
```
- **Explanation**: The store is created using `createStore` and is initialized with `initialData` containing `products`, `cart`, and `total`. The `reducer` currently just returns the initial state for any action.

### Main Entry Point

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
```
- **Explanation**: The `Provider` component is used to wrap the entire application (`App`). This makes the Redux store available to any nested components that use `useSelector`, `useDispatch`, or `connect`.

### Difference Between `useStore()` and `useSelector()`

- **`useStore()`**:
  - **Purpose**: Provides direct access to the Redux store instance.
  - **Usage**: Rarely needed; mainly used when you need access to the entire store object and its methods.
  - **Example**:
    ```javascript
    import { useStore } from 'react-redux';

    const MyComponent = () => {
        const store = useStore();
        // Now you have access to store.getState(), store.dispatch(), etc.
    };
    ```

- **`useSelector()`**:
  - **Purpose**: Allows components to extract specific pieces of state from the Redux store.
  - **Usage**: Frequently used to read state values.
  - **Example**:
    ```javascript
    import { useSelector } from 'react-redux';

    const MyComponent = () => {
        const value = useSelector(state => state.someValue);
        // Now you have access to the specific piece of state you need
    };
    ```

- **Key Differences**:
  - `useSelector` is used for selecting specific parts of the state, leading to better performance since it only re-renders the component when the selected state changes.
  - `useStore` provides access to the store itself and its methods, which is useful for more advanced scenarios where you need to interact directly with the store.

In summary, `useSelector` is the go-to hook for most scenarios where you need to read state in a functional component, while `useStore` is used in rare cases where direct store access is required.