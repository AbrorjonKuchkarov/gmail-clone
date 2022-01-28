import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

const Header = () => {
  return <div className='header'>
     <div className="header__left">
      <IconButton>
         <MenuIcon />
      </IconButton>
      <img src="img/gmail.jpeg" alt="" />
     </div>

     <div className="header__middle">

     </div>

     <div className="header__right">

     </div>
  </div>;
};

export default Header;
