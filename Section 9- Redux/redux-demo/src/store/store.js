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
    return state
}

const store = createStore(reducer);

export default store;