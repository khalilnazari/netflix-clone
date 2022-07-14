import { getMoviesss, updateMovie, createMovie, deleteMovie } from '../reducers/movieSlice'

import {getMoviesAPI, createMovieAPI, updateMovieAPI, deleteMovieAPI} from '../api/api'

export const getMovies2 = async (dispatch) => {
    try {
        const res = await getMoviesAPI(); 
        dispatch(getMoviesss(res.data))
        // console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}


// export const createMovie = async (data, dispatch) => {
//     try {
//         const res = await getMoviesAPI(data); 
//         dispatch(createMovie(res))
//     } catch (error) {
//         console.log(error)
//     }
// }

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