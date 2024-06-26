### Explanation of `useDispatch()` in Redux

#### Overview
`useDispatch` is a hook provided by the React-Redux library that gives you access to the `dispatch` function from the Redux store. This function allows you to send actions to the store, which in turn updates the state based on the reducer logic.

#### Usage in the Project

Here's the given code that uses `useDispatch`:

**Store Setup (`store.js`):**
```javascript
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
    return state;
};

const store = createStore(reducer);

export default store;
```

**Component (`Purchase.js`):**
```javascript
import { useSelector, useDispatch } from "react-redux";

const Purchase = () => {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    const purchaseHandler = (e) => {
        let pName = e.target.options[e.target.selectedIndex].text;
        let price = e.target.value;
        let obj = { pName, price };
        dispatch({ type: 'PURCHASE', payLoad: obj });
    };

    return (
        <div className="customDiv">
            <h3>Purchase Component</h3>
            <hr />
            <select onChange={(e) => purchaseHandler(e)}>
                {products.map((product, index) => {
                    return (
                        <option value={product.price} key={index}>
                            {product.pName} - ${product.price}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default Purchase;
```

### 1. Flow of Event Handling with Redux

1. **User Interaction**: The user interacts with the UI, such as selecting an option from a dropdown in the `Purchase` component.
2. **Event Handler**: The `onChange` event triggers the `purchaseHandler` function.
3. **Dispatch Action**: Inside `purchaseHandler`, an action of type `PURCHASE` is dispatched using the `dispatch` function from `useDispatch`.
4. **Reducer**: The dispatched action is received by the reducer. The reducer checks the action type and updates the state accordingly. In this case, it adds the selected product to the cart and updates the total price.
5. **State Update**: The Redux store updates its state based on the new state returned by the reducer.
6. **Component Re-render**: Any components that are subscribed to the relevant parts of the state (using `useSelector`) will re-render to reflect the updated state.

### 2. How to Dispatch Events with Hooks

- **Access the Dispatch Function**: Use the `useDispatch` hook to get access to the `dispatch` function.
- **Create an Event Handler**: Define a function that handles the event (e.g., a button click or a dropdown change).
- **Dispatch the Action**: Within the event handler, call the `dispatch` function with the appropriate action object.

**Example from the Project:**

In the `Purchase` component:
1. **Access Dispatch Function**:
   ```javascript
   const dispatch = useDispatch();
   ```
2. **Create Event Handler**:
   ```javascript
   const purchaseHandler = (e) => {
       let pName = e.target.options[e.target.selectedIndex].text;
       let price = e.target.value;
       let obj = { pName, price };
       dispatch({ type: 'PURCHASE', payLoad: obj });
   };
   ```
3. **Dispatch the Action**:
   ```javascript
   dispatch({ type: 'PURCHASE', payLoad: obj });
   ```

This pattern ensures that state management logic is decoupled from the UI logic, making the application easier to manage and scale.