import React from 'react';
import './widgetSmall.scss'; 
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";

const WidgetSmall = () => {
    const [newUsers, setNewUsers] = useState([]);

    useEffect(() => {
        const getNewUsers = async () => {
            try {
                const res = await axios.get("/users?new=true", {
                    headers: {
                        token:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYWQ1MzdhNGZjYjRhNzA4NjE1MTIwMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTgxOTA4OCwiZXhwIjoxNjU1OTkxODg4fQ.UJxcyjsbBeOmKrAVepMRCXy1RaFschqDxrsGFqdG2K8",
                    },
                });
                
                setNewUsers(res.data);
            } catch (err) {
                console.log(err);
            }
        };

        // console.log("NewUsers: ", newUsers)
        getNewUsers();
    }, []);
    
    return (
        <div className="widget-small">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                {newUsers.map((user) => (
                    <li className="widgetSmListItem">
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