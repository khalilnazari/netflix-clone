import React from 'react';
import './widgetSmall.scss'; 
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { getUsersAPI } from '../../redux/api/api';

const WidgetSmall = () => {
    const [newUsers, setNewUsers] = useState([]);

    const getNewUsers = async () => {
        try {
            const res = await getUsersAPI("?new=true");
            setNewUsers(res.data); 
        } catch (error) {
            console.log(error)
        } 
    }

    useEffect(() => {
        getNewUsers(); 
    }, []);
    
    return (
        <div className="widget-small">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                {newUsers.map((user) => (
                    <li className="widgetSmListItem" key={user._id}>
                        <img src={ user.profilePic || "https://i.pinimg.com/originals/b4/0f/9f/b40f9f8fc0fb88aabf2a8acbc39c0ac0.png" } alt="" className="widgetSmImg"/>
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">{user.username}</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon" />
                            Display
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WidgetSmall;