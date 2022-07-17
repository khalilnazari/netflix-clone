import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [], 
    pendein: false, 
    error: false, 
}; 

const userSlice = createSlice({
    name: "users", 
    initialState, 

    reducers: {
        getUsers: (state, action) => {
            state.users = action.payload;
        },

        // createUser: (state, action) => {
        //     state.users = [...state.users, action.payload ];
        // },

        // // action.payload is object {List, id}
        // updateUser: (state, action) => {
        //     state = state.map(user => user._id === action.payload._id && user);
        // },

        // // action.payload is object
        // deleteUser: (state, action) => {
        //     state = state.filter(user => user._id !== action.payload._id);
        // }
    }
})

// export actions 
export const { getUsers } = userSlice.actions;

// export reducer 
export default userSlice.reducer; 