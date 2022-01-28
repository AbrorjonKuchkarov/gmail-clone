import React from 'react';
import "./EmailList.css"
import { Checkbox, IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';

const EmailList = () => {
  return <div className='emailList' >
     <div className="emailList__settings">
        <div className="emailList__settingsLeft">
           <Checkbox />
           <IconButton>
              <ArrowDropDownIcon />
           </IconButton>
           <IconButton>
              <RedoIcon />
           </IconButton>
           <IconButton>
              <ArrowDropDownIcon />
           </IconButton>
        </div>
     </div>
  </div>;
};

export default EmailList;
