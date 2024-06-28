import { createSlice } from "@reduxjs/toolkit"

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
}

const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        purchase: (state, action) => {
            state.cart = [...state.cart, action.payload];
            state.total = state.total + parseInt(action.payload.price);
        },
        deleteItem: (state, action) => {
            state.cart = state.cart.filter((i, index) => index !== action.payload.index);
            state.total = state.total - action.payload.price;
        }
    }

})

export const {purchase, deleteItem} = productSlice;
export default productSlice.reducer;