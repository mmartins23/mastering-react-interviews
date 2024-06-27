import { createStore } from "redux"

const initData = {
    products: [
        { pName: 'Apple', price: 20 },
        { pName: 'Banana', price: 3 },
        { pName: 'Orange', price: 10 },
        { pName: 'Grapes', price: 8 },
        { pName: 'Mango', price: 45 }
    ],
    cart: [],
    total: 0,
    users: ['admin', 'manager', 'end-user'],
    loginDet: 'None'
}
const reducer = (state = initData, action) => {
    if (action.type === 'PURCHASE') {
        return {
            ...state,
            cart: [...state.cart, action.payLoad],
            total: state.total + parseInt(action.payLoad.price)

        }
    }
    if (action.type === 'DELETE') {
        return {
            ...state,
            cart: state.cart.filter((i, index) => index !== action.payLoad.index),
            total: state.total - action.payLoad.price
        }

    }

    if (action.type === 'LOGIN') {
        return {
            ...state,
            loginDet: action.loginDet
        }

    }
    return state;
}
const store = createStore(reducer);

export default store;