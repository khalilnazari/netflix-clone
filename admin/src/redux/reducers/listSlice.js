import { createSlice } from "@reduxjs/toolkit";

const initialState = []; 

const listSlice = createSlice({
    name: "lists", 
    initialState, 

    reducers: {
        getLists: (state, action) => {
            state = action.payload;
        }, 

        createList: (state, action) => {
            state = [...state, action.payload ];
        },

        // action.payload is object {List, id}
        updateList: (state, action) => {
            state = state.map(list => list._id === action.payload._id && list);
        },

        // action.payload is object
        deleteList: (state, action) => {
            state = state.filter(list => list._id !== action.payload._id);
        }
    }
})

// export actions 
export const {getLists, createList, updateList, deleteList} = listSlice.actions;

// export reducer 
export default listSlice.reducer; 