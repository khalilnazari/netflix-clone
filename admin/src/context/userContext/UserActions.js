// export to apiCall page
import { UPDATE_USER_FAILURE, UPDATE_USER_SUCCESS, UPDATE_USER_START} from './contants.js';

export const getUsersStart = () => ({
    type: "GET_USERS_START"
})

export const getUsersSuccess = (users) => ({
    type: "GET_USERS_SUCCESS", 
    payload: users,
})

export const getUsersFailure = () => ({
    type: "GET_USERS_FAILURE"
})

export const updateUsersStart = () => ({
    type: UPDATE_USER_START
})

export const updateUsersSuccess = (users) => ({
    type: UPDATE_USER_SUCCESS, 
    payload: users,
})

export const updateUsersFailure = () => ({
    type: UPDATE_USER_FAILURE
})
