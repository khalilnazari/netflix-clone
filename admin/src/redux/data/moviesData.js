import { 
    getMovies, 
    // updateMovie, 
    createMovie, 
    // deleteMovie 
} from '../reducers/movieSlice'

import {
    getMoviesAPI, 
    createMovieAPI, 
    // updateMovieAPI, 
    // deleteMovieAPI
} from '../api/api'

export const getMoviesData = async (dispatch) => {
    try {
        const res = await getMoviesAPI(); 
        dispatch(getMovies(res.data))
    } catch (error) {
        console.log(error)
    }
}


export const createMovie2 = async (data, dispatch) => {
    console.log(data);
    try {
        const res = await createMovieAPI(data); 
        dispatch(createMovie(res.data))
    } catch (error) {
        console.log(error)
    }
}

// export const updateMovie = async (dispatch) => {
//     try {
//         const res = await getMoviesAPI(data, id); 
//         dispatch(updateMovie({res, id}))
//     } catch (error) {
//         console.log(error)
//     }
// }

// export const deleteMovie = async (id, data, dispatch) => {
//     try {
//         const res = await deleteMovieAPI(data, id); 
//         dispatch(deleteMovie(id))
//     } catch (error) {
//         console.log(error)
//     }
// }