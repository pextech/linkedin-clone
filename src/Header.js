import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import linkedin from './linkedin.png'
import './Header.css'
import HeaderOption from './HeaderOption';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationIcon from '@material-ui/icons/Notifications';
import avatar from './me.png';

function Header() {
    return (
        <div className='header'>

            <div className="header__left">
               <img src={linkedin} alt=""></img>

               <div className="header__search">
                   <SearchIcon />
                   <input type="text">

                   </input>
               </div>

            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home'/>
                <HeaderOption Icon={SupervisorAccountIcon} title='My network'/>
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
                <HeaderOption Icon={ChatIcon} title='Messaging'/>
                <HeaderOption Icon={NotificationIcon} title='Notifications'/>
                <HeaderOption avatar={avatar} title='me'/>
                </div>
        </div>
    )
}

export default Header
