import React from 'react';
import "./SendMail.css"
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';

const SendMail = () => {
  return <div className='sendMail'>
     <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon className='sendMail__close' />
     </div>

     <form >
        <input type="text" placeholder='To' />
        <input type="text" placeholder='Subject' />
        <input type="text" placeholder='Message...' className='sendMail__message' />

        <div className="sendMail__options">
           <Button className='sendMail__send' 
           variant="contained"
           color='primary' 
           type='submit' >Send</Button>
        </div>
     </form>
  </div>;
};

export default SendMail;