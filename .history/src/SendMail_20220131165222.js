import React from 'react';
import "./SendMail.css"
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';

const SendMail = () => {
  return <div className='sendMail'>
     <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon className='sendMail__close' />
     </div>

     <form >
        <input type="text" />
        <input type="text" />
        <input type="text" />

        <div className="sendMail__options">
           <Button className='sendMail__send' >Send</Button>
        </div>
     </form>
  </div>;
};

export default SendMail;