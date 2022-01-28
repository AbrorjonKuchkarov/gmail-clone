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
      <img src="https://images.search.yahoo.com/search/images?p=how+to+find+gmail+image&fr=mcafee&type=E210KR91214G91422&imgurl=https%3A%2F%2Fcdn2.expertreviews.co.uk%2Fsites%2Fexpertreviews%2Ffiles%2F2016%2F04%2Fgmail.jpg#id=31&iurl=https%3A%2F%2Fcdn2.expertreviews.co.uk%2Fsites%2Fexpertreviews%2Ffiles%2F2016%2F04%2Fgmail.jpg&action=click" alt="" />
     </div>

     <div className="header__middle">

     </div>

     <div className="header__right">

     </div>
  </div>;
};

export default Header;
