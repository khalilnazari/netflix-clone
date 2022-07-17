import React from 'react';
import './topbar.scss'; 
import { NotificationsNone, Language, Settings, ExitToApp, PermIdentity, ArrowDropDown } from "@material-ui/icons";
import { Link} from 'react-router-dom';
const Topbar = () => {
    const handleLogout = () => {
       
    }
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
                    

                    <div className="avatar">
                        <img src="https://flyinryanhawks.org/wp-content/uploads/2016/08/profile-placeholder.png" alt="" className="topAvatar" />
                        <ArrowDropDown />
                        <div className='user-menu'>
                            <Link to="/profile" className='user-menu__link'><PermIdentity /> Profile</Link>
                            <span className='user-menu__link' onClick={handleLogout}><ExitToApp/> Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;