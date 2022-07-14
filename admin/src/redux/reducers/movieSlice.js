import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [], 
    error: false, 
    pending: false,
}; 

const movieSlice = createSlice({
    name: "movies", 
    initialState, 

    reducers: {
        getMoviesss: (state, action) => {
            state.movies = action.payload;
        }, 

        createMovie: (state, action) => {
            state = [...state, action.payload ];
        },

        // action.payload is object {movie, id}
        updateMovie: (state, action) => {
            state = state.map(movie => movie._id === action.payload._id && movie);
        },

        // action.payload is object
        deleteMovie: (state, action) => {
            state = state.filter(movie => movie._id !== action.payload._id);
        }
    }
})

// export actions 
export const {getMoviesss, createMovie, updateMovie, deleteMovie} = movieSlice.actions;

// export reducer 
export default movieSlice.reducer; 