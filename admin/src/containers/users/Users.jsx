import React, {useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import { getUsers2 } from '../../redux/data/usersData';
import {Link} from 'react-router-dom';
import './users.scss'
import { DeleteOutline } from "@material-ui/icons";
import { DataGrid } from "@material-ui/data-grid";
import { useState } from 'react';
import { getUsersAPI } from '../../redux/api/api';
import { getUsers } from '../../redux/reducers/userSlice';

const UserList = () => {
    const dispatch = useDispatch(); 
    const users  = useSelector(state => state.users.users);
    console.log(users)

    const usersList = async () => {
        try {
            const res = await getUsersAPI(); 
            dispatch(getUsers(res.data));
        } catch (error) {
            console.log(error)
            return error; 
        }
    }

    useEffect(() => {
        usersList(); 
    }, [dispatch])

    const handleDelete = (id) => {
        console.log(id)
    };
      
    const columns = [
        { field: "_id", headerName: "ID", width: 190 },
        {
            field: "user",
            headerName: "Username",
            width: 200,
            renderCell: (params) => {
                return (
                <div className="userListUser">
                    <img className="userListImg" src={params.row.avatar || "https://john-mohamed.com/wp-content/uploads/2018/05/Profile_avatar_placeholder_large.png"} alt="" />
                    {params.row.username}
                </div>
                );
            },
        },
        { field: "email", headerName: "Email", width: 200 },
        {
            field: "isAdmin",
            headerName: "isAdmin",
            width: 100,
        },
        {
            field: "createdAt",
            headerName: "Join Date",
            width: 260,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                <>
                    <Link  to={`/user/${params.row._id}`} state={{user: params.row}}>
                        <button className="userListEdit">Edit</button>
                    </Link>
                    <DeleteOutline
                        className="userListDelete"
                        onClick={() => handleDelete(params.row._id)}
                    />
                </>
                );
          },
        },
    ];


    return (
        <div className="userList">
            <DataGrid
                rows={users}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
                getRowId={(r) => r._id}
            />
        </div>
    );
};

export default UserList;