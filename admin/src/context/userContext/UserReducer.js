import { UPDATE_USER_FAILURE, UPDATE_USER_SUCCESS, UPDATE_USER_START} from './contants.js';

const UserReducer = (state, action) => {
    console.log("user state: ",state)
    console.log("user action: ",action)

    switch(action.type) {
        case "GET_USERS_START" : 
            return {
                users: [], 
                isFetching: true, 
                error: false,
            }

        case "GET_USERS_SUCCESS" : 
            return {
                users: action.payload, 
                isFetching: false, 
                error: false,
            }

        case "GET_USERS_FAILURE": 
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
                users: state,
                // users: state.users.map(user => user.id === action.payload), 
                isFetching: false, 
                error: false,
            }

        case UPDATE_USER_FAILURE: 
            return {
                users: state, 
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