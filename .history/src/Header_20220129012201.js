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
      <img src="https://images.search.yahoo.com/search/images;_ylt=Awr9IlDDF_Rh2NgAbMhXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=gmail+image&fr2=piv-web&type=E210KR91214G91422&fr=mcafee#id=126&iurl=https%3A%2F%2Fcdn.freelogovectors.net%2Fwp-content%2Fuploads%2F2020%2F10%2Fnew_gmail_logo.png&action=click" alt="gmail" />
     </div>

     <div className="header__middle">

     </div>

     <div className="header__right">

     </div>
  </div>;
};

export default Header;
