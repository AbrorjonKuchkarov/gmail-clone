import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';

const Header = () => {
  return <div className='header'>
     <div className="header__left">
      <IconButton>
         <MenuIcon />
      </IconButton>
      <img src="img/gmail.jpeg" alt="Gmail" />
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
     </div>
  </div>;
};

export default Header;
