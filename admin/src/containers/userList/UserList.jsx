import React, { useContext, useEffect } from 'react';
import './userList.scss'
import { UserContext } from '../../context/userContext/UserContext'
import {getUsers} from '../../context/userContext/apiCall';
import {Link} from 'react-router-dom';
import { DeleteOutline } from "@material-ui/icons";
import { DataGrid } from "@material-ui/data-grid";

const UserList = () => {
    const {users, dispatch} = useContext(UserContext); 

    useEffect(() => {
        getUsers(dispatch)
    },[dispatch])


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