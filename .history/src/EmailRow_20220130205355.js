import React from 'react';
import './EmailRow.css'
import { Checkbox, IconButton } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';

const EmailRow = ({ id, title, subject, description, time }) => {
  return <div className='emailRow' >
     
     <div className="emailRow__options">
        <Checkbox />
        <IconButton>
         <StarBorderIcon />
        </IconButton>
        <IconButton>
         <LabelImportantIcon />
        </IconButton>

     </div>

     <h3 className="emailRow__title">
         {title}
     </h3>

     <div className="emailRow__message">

     </div>

     <div className="emailRow__description">

     </div>
  </div>;
};

export default EmailRow;
