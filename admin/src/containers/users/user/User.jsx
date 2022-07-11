import React, { useContext, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './user.scss';
import {UserContext} from '../../../context/userContext/UserContext'
import { CalendarToday, MailOutline, PermIdentity } from "@material-ui/icons";
import { updateUser } from '../../../context/userContext/apiCall';
import { useEffect } from 'react';

const User = () => {
    const { dispatch } = useContext(UserContext)
    const [userUpdate, setUserUpdate] = useState(null);
    const location = useLocation(); 
    const {user} = location.state; 

    const handleChange = (e) => {
        const value = e.target.value; 
        setUserUpdate({...userUpdate, [e.target.name]: value})
    }
    useEffect(() => {
        setUserUpdate({_id:user._id})
    }, [user._id])

    const handlUpdate = (e) => {
        e.preventDefault();
        setUserUpdate(userUpdate); 
        updateUser(userUpdate, dispatch)
    }

    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img
                            src="https://john-mohamed.com/wp-content/uploads/2018/05/Profile_avatar_placeholder_large.png"
                            alt="static user-avatar"
                            className="userShowImg"
                        />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">{user.username}</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">{user.username}</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">{user.createdAt}</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">{user.email}</span>
                        </div>
                        <div className="userShowInfo">
                            {/* <MailOutline className="userShowIcon" /> */}
                            <span className="userShowInfoTitle">Admin: {user.isAdmin ? 'Yes': 'No'}</span>
                        </div>
                    </div>
                </div>

                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm" onSubmit={handlUpdate}>
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input
                                    type="text"
                                    placeholder={user.username}
                                    className="userUpdateInput"
                                    name='username'
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Admin</label>
                                <select className="userUpdateInput" onChange={handleChange} name="isAdmin">
                                    <option value="true">Select Yes for admin</option>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input
                                    type="text"
                                    placeholder={user.email}
                                    className="userUpdateInput"
                                    name="email"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default User;