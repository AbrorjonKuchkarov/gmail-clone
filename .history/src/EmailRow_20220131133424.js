import React from 'react';
import './EmailRow.css'
import { Checkbox, IconButton } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { useHistory } from 'react-router';

const EmailRow = ({ id, title, subject, description, time }) => {
  return <div onClick={() => history.push('/mail') } className='emailRow' >
     
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
         <h4>
            {subject}
            <span className="emailRow__description"> - { description }</span>
         </h4>
     </div>

     <p className="emailRow__time">
         {time}
     </p>
  </div>;
};

export default EmailRow;
