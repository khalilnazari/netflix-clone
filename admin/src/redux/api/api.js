import axios from "axios";

const getHeader = () => {
    const token = JSON.parse(localStorage.getItem('nf-auth')).accessToken; 

    const header =  {
        headers: { token: "Bearer " + token }
    };

    return header; 
} 

// users 
export const getUsersAPI = (query="") => axios.get(`/users${query}`, getHeader()); 
export const createUserAPI = (data, id) => axios.post(`/users/${id}`, data, getHeader())
export const updateUserAPI = (data, id) => axios.put(`/users/${id}`, data, getHeader())
export const deleteUserAPI = (id) => axios.delete(`/users/${id}`, getHeader())

// movies 
export const getMoviesAPI = () => axios.get(`/movies`, getHeader())
export const createMovieAPI = (data) => axios.post(`/movies`, data, getHeader())
export const updateMovieAPI = (data, id) => axios.put(`/movies/${id}`, data, getHeader())
export const deleteMovieAPI = (id) => axios.delete(`/movies/${id}`, getHeader())

// lists
export const getListsAPI = () => axios.get(`/lists`, getHeader())
export const createListAPI = (data, id) => axios.post(`/lists/${id}`, data, getHeader())
export const updateListAPI = (data, id) => axios.put(`/lists/${id}`, data, getHeader())
export const deleteListAPI = (id) => axios.delete(`/lists/${id}`, getHeader())


// auth
export const loginAPI = (data) => axios.post(`/auth/login`, data)
