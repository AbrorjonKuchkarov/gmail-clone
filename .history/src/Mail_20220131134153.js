import { IconButton } from '@mui/material';
import React from 'react';
import './Mail.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const Mail = () => {
  return <div className="mail" >
    <div className="mail__tools">
      <div className="mail__toolsLeft">
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
      </div>
    </div>
    <h1>what up</h1>
  </div>;
};

export default Mail;
