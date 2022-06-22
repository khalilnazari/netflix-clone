import React from 'react';
import './topbar.scss'; 
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Netflex Admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://flyinryanhawks.org/wp-content/uploads/2016/08/profile-placeholder.png" alt="" className="topAvatar" />
                    </div>
            </div>
        </div>
    );
};

export default Topbar;