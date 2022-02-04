import { IconButton } from '@mui/material';
import { useHistory } from 'react-router';
import React from 'react';
import './Mail.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';


const Mail = () => {
  const history = useHistory();

  return <div className="mail" >
    <div className="mail__tools">
      <div className="mail__toolsLeft">
        <IconButton onClick={() => history.push('/') } >
          <ArrowBackIcon />

        </IconButton>
          <MoveToInboxIcon />
        <IconButton>

        </IconButton>
          <ErrorIcon />
        <IconButton>

        </IconButton>
          <DeleteIcon />
        <IconButton>

        </IconButton>
          <EmailIcon />
        <IconButton>

        </IconButton>
          <WatchLaterIcon />
        <IconButton>

        </IconButton>
          <CheckCircleIcon />
        <IconButton>

        </IconButton>
          <LabelImportantIcon />
        <IconButton>
          
        </IconButton>
          <MoveToInboxIcon />
        <IconButton>
        </IconButton>
          <MoveToInboxIcon />
        <IconButton>

        </IconButton>
      </div>
    </div>
    <h1>what up</h1>
  </div>;
};

export default Mail;
