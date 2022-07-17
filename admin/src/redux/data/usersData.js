import {getUsersAPI} from '../api/api'; 
import {getUsers} from '../reducers/userSlice'; 

export const getUsers2 = async (dispatch) => {
    try {
        const res =  await getUsersAPI(); 
        dispatch(getUsers(res.data));
    } catch (error) {
        console.log(error);
    }
};