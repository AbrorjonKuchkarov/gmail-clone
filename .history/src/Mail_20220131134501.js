import { IconButton } from '@mui/material';
import { useHistory } from 'react-router';
import React from 'react';
import './Mail.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const Mail = () => {
  const history = useHistory();
  
  return <div className="mail" >
    <div className="mail__tools">
      <div className="mail__toolsLeft">
        <IconButton onClick={() => history.push('/') } >
          <ArrowBackIcon />
        </IconButton>
      </div>
    </div>
    <h1>what up</h1>
  </div>;
};

export default Mail;
