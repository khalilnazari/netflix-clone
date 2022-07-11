import {getUsersFailure, getUsersStart, getUsersSuccess, updateUsersFailure, updateUsersStart, updateUsersSuccess, getOneUsersStart, getOneUsersSuccess, getOneUsersFailure} from './UserActions'
import axios from 'axios';

export const getUsers = async (dispatch) => {
    // start 
    dispatch(getUsersStart());

    // success
    try {
        const response = await axios.get('/users', {
            headers: {
                token : "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            } 
        });

        dispatch(getUsersSuccess(response.data))
    } catch (error) {
       // error
        dispatch(getUsersFailure())
    }
}

export const getUser = async (id, dispatch) => {
    // start 
    dispatch(getOneUsersStart());

    // success
    try {
        const response = await axios.get('/users/'+id, {
            headers: {
                token : "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            } 
        });

        dispatch(getOneUsersSuccess(response.data))
    } catch (error) {
       // error
        dispatch(getOneUsersFailure())
    }
}

export const updateUser = async (user, dispatch) => {
    dispatch(updateUsersStart())
    
    const id = user._id; 
    // console.log("apiCall: ",user)
    try {
        const response = await axios.put('/users/'+ id, user, {
            headers: {
                token: "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken
            }
        });
        dispatch(updateUsersSuccess(response.data))
    } catch (error) {
        dispatch(updateUsersFailure(error))
    }
}