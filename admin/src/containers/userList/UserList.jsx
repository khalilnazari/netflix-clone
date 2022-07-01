import React, { useContext, useEffect } from 'react';
import './userList.scss'
import { UserContext } from '../../context/userContext/UserContext'
import {getUsers} from '../../context/userContext/apiCall';

const UserList = () => {
    const {users, dispatch} = useContext(UserContext); 
    console.log("USers "+users)

    useEffect(() => {
        getUsers(dispatch)
    },[dispatch])

    return (
        <div>
            UserList
        </div>
    );
};

export default UserList;