import React from 'react';
import './Header.css';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// import MailIcon from '@mui/icons-material/Mail';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';

const Header = () => {
   const user = useSelector(selectUser);

   const sighOut = () => {

   }

  return <div className='header'>
     <div className="header__left">
      <IconButton>
         <MenuIcon />
      </IconButton>
      {/* <MailIcon />  */}
      <MailOutlineIcon />
      <h3>
         Gmail
      </h3>
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
         <AccountCircleIcon onClick={signOut} src = { user?.photoUrl } />
     </div>
  </div>;
};

export default Header;
