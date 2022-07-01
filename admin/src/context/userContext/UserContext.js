import UserReducer from './UserReducer'
import { createContext, useReducer} from 'react'

const INITIAL_STATE = {
    users: [], 
    isFetching: false, 
    error: false,
}

export const UserContext = createContext(INITIAL_STATE); 

export const UserContextProvider = ({children}) => {
    const {state, dispatch} = useReducer(UserReducer, INITIAL_STATE) ; 

    return (
        <UserContext.Provider value={{ dispatch, users:state.users, isFeching: state.isFeching, error:state.error }}>
            {children}
        </UserContext.Provider>
    )
}