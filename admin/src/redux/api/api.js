import axios from "axios";

const URL = ""; 

const header = {
    headers: { token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken }
};

// users 
export const getUsers = () => axios.get(`/users`, header); 
export const createUser = (data, id) => axios.post(`/users/${id}`, data, header)
export const updateUser = (data, id) => axios.put(`/users/${id}`, data, header)
export const deleteUser = (id) => axios.delete(`/users/${id}`, header)

// movies 
export const getMoviesAPI = () => axios.get(`/movies`, header)
export const createMovieAPI = (data) => axios.post(`/movies`, data, header)
export const updateMovieAPI = (data, id) => axios.put(`/movies/${id}`, data, header)
export const deleteMovieAPI = (id) => axios.delete(`/movies/${id}`, header)

// lists
export const getLists = () => axios.get(`/lists`, header)
export const createList = (data, id) => axios.post(`/lists/${id}`, data, header)
export const updateList = (data, id) => axios.put(`/lists/${id}`, data, header)
export const deleteList = (id) => axios.delete(`/lists/${id}`, header)