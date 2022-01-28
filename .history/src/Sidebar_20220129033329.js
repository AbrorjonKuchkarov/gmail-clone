import { Button } from '@mui/material';
import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';



const Sidebar = () => {
  return <div className='sidebar' >
     <Button startIcon={ <AddIcon fontSize='large'  /> } className='sidebar__compose'>Compose</Button>
     <SidebarOption Icon={InboxIcon} title="Inbox" number={54} />
     <SidebarOption Icon={StarIcon} title="Starred" number={54} />
  </div>;
};

export default Sidebar;
