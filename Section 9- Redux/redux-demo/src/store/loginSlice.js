import { createSlice } from "@reduxjs/toolkit"


const initialState={
    users:['admin','manager','end-user'],
    loginDet:'None'
}
const loginSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
        userLogin:(state, action) => {
            state.loginDet = action.loginDet;
        }
    }
})

export const {userLogin} = loginSlice.actions;
export default loginSlice.reducer();