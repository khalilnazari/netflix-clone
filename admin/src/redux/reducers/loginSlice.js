import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'login', 
    initialState : {
        login: [], 
    }, 


    reducers : {
        login: (state, action) => {
            state.login = action.payload
        }
    }
})

export const { login } = loginSlice.actions; 
export default loginSlice.reducer; 