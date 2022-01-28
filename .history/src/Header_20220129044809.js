import React from 'react';
import './Header.css';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  return <div className='header'>
     <div className="header__left">
      <IconButton>
         <MenuIcon />
      </IconButton>
      <MailIcon />
     </div>

     <div className="header__middle">
         <SearchIcon />
         <input type="text" placeholder='Search mail' />
         <ArrowDropDownIcon className='header__inputCaret' />
     </div>

     <div className="header__right">
         <IconButton>
            <AppsIcon />
         </IconButton>
         <IconButton>
            <NotificationsIcon/>
         </IconButton>
         <AccountCircleIcon />
     </div>
  </div>;
};

export default Header;
