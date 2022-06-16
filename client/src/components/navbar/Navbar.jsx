import './navbar.scss'

import { Notifications, Search, ArrowDropDown} from '@material-ui/icons';
import {logoImg, khalil} from '../../assets'
import { useState } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    window.addEventListener('scroll', () => {
        let page_y_offset = Math.floor(window.pageYOffset)
        setIsScrolled(page_y_offset < 10 ? false : true)
        return () => (window.onscroll === null)
    })

    // jsx
    return (
        <div className={isScrolled ? 'navbar scrolled': 'navbar'}>
            <div className="container">
                <div className="left-col">
                    <img src={logoImg} className="logo-image" alt="logoImg" />
                    <span className='nav-link'>Homepage</span>
                    <span className='nav-link'>Series</span>
                    <span className='nav-link'>Movies</span>
                    <span className='nav-link'>New and Popular</span>
                    <span className='nav-link'>My List</span>
                </div>

                {/* right side */}
                <div className="right-col">
                    <Search className="icon" />
                    <span>KID</span>
                    <Notifications className="icon" />
                    <img src={khalil} className="profile-avatar" alt="profileImg" />
                    
                    <div className="profile">
                        <ArrowDropDown className="icon" />
                        <div className="options">
                            <span className='options-link'>Settings</span>
                            <span className='options-link'>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar; 