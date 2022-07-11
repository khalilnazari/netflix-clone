// export to apiCall page
import { UPDATE_USER_FAILURE, UPDATE_USER_SUCCESS, UPDATE_USER_START, GET_USER_FAILURE, GET_USER_START, GET_USER_SUCCESS, GET_ONE_USER_START, GET_ONE_USER_SUCCESS, GET_ONE_USER_FAILURE } from './contants.js';

export const getUsersStart = () => ({
    type: GET_USER_START
})

export const getUsersSuccess = (users) => ({
    type: GET_USER_SUCCESS, 
    payload: users,
})

export const getUsersFailure = () => ({
    type: GET_USER_FAILURE
})

export const getOneUsersStart = () => ({
    type: GET_ONE_USER_START
})
export const getOneUsersSuccess = (user) => ({
    type: GET_ONE_USER_FAILURE, 
    payload: user
})
export const getOneUsersFailure = () => ({
    type: GET_ONE_USER_SUCCESS
})

export const updateUsersStart = () => ({
    type: UPDATE_USER_START
})

export const updateUsersSuccess = (user) => ({
    type: UPDATE_USER_SUCCESS, 
    payload: user,
})

export const updateUsersFailure = () => ({
    type: UPDATE_USER_FAILURE
})
