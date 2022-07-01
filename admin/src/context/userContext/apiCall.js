import {getUsersFailure, getUsersStart, getUsersSuccess} from './UserActions'
import axios from 'axios';

export const getUsers = async (dispatch) => {
    console.log("getUers function 999", dispatch)
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