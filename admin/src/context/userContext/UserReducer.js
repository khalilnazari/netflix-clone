import { UPDATE_USER_FAILURE, UPDATE_USER_SUCCESS, UPDATE_USER_START, GET_USER_START, GET_USER_SUCCESS, GET_USER_FAILURE, GET_ONE_USER_START, GET_ONE_USER_SUCCESS, GET_ONE_USER_FAILURE} from './contants.js';

const UserReducer = (state, action) => {
    switch(action.type) {
        case GET_USER_START : 
            return {
                users: [], 
                isFetching: true, 
                error: false,
            }

        case GET_USER_SUCCESS : 
            return {
                users: action.payload, 
                isFetching: false, 
                error: false,
            }

        case GET_USER_FAILURE : 
            return {
                users: [], 
                isFetching: false, 
                error: true,
            }

        case UPDATE_USER_START: 
            return {
                users: state, 
                isFetching: true, 
                error: false,
            }
        
        case UPDATE_USER_SUCCESS : 
            return {
                users: state.users.map(user => user.id === action.payload._id && user),
                isFetching: false, 
                error: false,
            }

        case UPDATE_USER_FAILURE: 
            return {
                users: [], 
                isFetching: false, 
                error: true,
            }
        
        case GET_ONE_USER_START: 
            return {
                users: [], 
                isFetching: true, 
                error: false,
            }

        case GET_ONE_USER_SUCCESS: 
            return {
                users: state.payload, 
                isFetching: false, 
                error: false,
            }
        
        case GET_ONE_USER_FAILURE: 
            return {
                users: [], 
                isFetching: false, 
                error: true,
            }

        default: 
            return {
                ...state
            }
    }
}

export default UserReducer; 