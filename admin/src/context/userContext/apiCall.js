import {getUsersFailure, getUsersStart, getUsersSuccess, updateUsersFailure, updateUsersStart, updateUsersSuccess} from './UserActions'
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

export const updateUser = async (user, dispatch) => {
    dispatch(updateUsersStart())
    
    const id = user._id; 
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