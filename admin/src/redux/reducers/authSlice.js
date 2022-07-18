import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'login', 
    initialState : {
        login: [], 
        logout: [], 
        loginFail: []
    }, 

    reducers : {
        loginAction: (state, action) => {
            state.login = action.payload
        }, 

        logoutAction: (state, action) => {
            state.logout = action.payload
        }, 

        loginFail: (state, action) => {
            state.loginFail = action.payload
        }
    }
})

// actions 
export const { loginAction } = authSlice.actions; 

// reducer
export default authSlice.reducer; 