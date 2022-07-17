import React from 'react';
// import {Link } from 'react-router-dom';
import './user.scss';
// import { CalendarToday, MailOutline, PermIdentity } from "@material-ui/icons";


const User = () => {


    // const handleChange = (e) => {
    //     const value = e.target.value; 
    //     setUserUpdate({...userUpdate, [e.target.name]: value})
    // }


    // const handlUpdate = (e) => {
    //     e.preventDefault();
    // }

    return (
        <div>User</div>
        // <div className="user">
        //     <div className="userTitleContainer">
        //         <h1 className="userTitle">Edit User</h1>
        //         <Link to="/newUser">
        //             <button className="userAddButton">Create</button>
        //         </Link>
        //     </div>
        //     <div className="userContainer">
        //         <div className="userShow">
        //             <div className="userShowTop">
        //                 <img
        //                     src="https://john-mohamed.com/wp-content/uploads/2018/05/Profile_avatar_placeholder_large.png"
        //                     alt="static user-avatar"
        //                     className="userShowImg"
        //                 />
        //                 <div className="userShowTopTitle">
        //                     <span className="userShowUsername">{user.username}</span>
        //                 </div>
        //             </div>
        //             <div className="userShowBottom">
        //                 <span className="userShowTitle">Account Details</span>
        //                 <div className="userShowInfo">
        //                     <PermIdentity className="userShowIcon" />
        //                     <span className="userShowInfoTitle">{user.username}</span>
        //                 </div>
        //                 <div className="userShowInfo">
        //                     <CalendarToday className="userShowIcon" />
        //                     <span className="userShowInfoTitle">{user.createdAt}</span>
        //                 </div>
        //                 <div className="userShowInfo">
        //                     <MailOutline className="userShowIcon" />
        //                     <span className="userShowInfoTitle">{user.email}</span>
        //                 </div>
        //                 <div className="userShowInfo">
        //                     {/* <MailOutline className="userShowIcon" /> */}
        //                     <span className="userShowInfoTitle">Admin: {user.isAdmin ? 'Yes': 'No'}</span>
        //                 </div>
        //             </div>
        //         </div>

        //         <div className="userUpdate">
        //             <span className="userUpdateTitle">Edit</span>
        //             <form className="userUpdateForm" onSubmit={handlUpdate}>
        //                 <div className="userUpdateLeft">
        //                     <div className="userUpdateItem">
        //                         <label>Username</label>
        //                         <input
        //                             type="text"
        //                             placeholder={user.username}
        //                             className="userUpdateInput"
        //                             name='username'
        //                             onChange={handleChange}
        //                         />
        //                     </div>
        //                     <div className="userUpdateItem">
        //                         <label>Admin</label>
        //                         <select className="userUpdateInput" onChange={handleChange} name="isAdmin">
        //                             <option value="true">Select Yes for admin</option>
        //                             <option value="true">Yes</option>
        //                             <option value="false">No</option>
        //                         </select>
        //                     </div>
        //                     <div className="userUpdateItem">
        //                         <label>Email</label>
        //                         <input
        //                             type="text"
        //                             placeholder={user.email}
        //                             className="userUpdateInput"
        //                             name="email"
        //                             onChange={handleChange}
        //                         />
        //                     </div>
        //                 </div>
        //                 <div className="userUpdateRight">
        //                     <button className="userUpdateButton">Update</button>
        //                 </div>
        //             </form>
        //         </div>
        //     </div>
        // </div>
    );
};

export default User;