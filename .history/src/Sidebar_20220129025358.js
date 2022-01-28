import React from 'react';
import './Sidebar.css';
import AddIcon from '@mui/icons-material/Add';


const Sidebar = () => {
  return <div className='sidebar' >
     <button startIcon={ <AddIcon fontSize='large' /> } >Compose</button>
  </div>;
};

export default Sidebar;
