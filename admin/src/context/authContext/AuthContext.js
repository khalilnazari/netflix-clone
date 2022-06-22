import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user:null, 
    isFetching: false, 
    error:false,
}

export const AuthContext = createContext(INITIAL_STATE); 

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)
    
    let value = {user:state.user, isFetching:state.isFetching, error:state.error, dispatch}; 
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}