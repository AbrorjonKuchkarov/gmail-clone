import React from 'react';
import "./SendMail.css"
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';

const SendMail = () => {
   const { register, handleSubmit, watch, errors } = useForm();
  return <div className='sendMail'>
     <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon className='sendMail__close' />
     </div>

     <form >
        <input name='to' type="text" placeholder='To' ref={register({ required: true })} />
        <input name='subject' type="text" placeholder='Subject' ref={register({ required: true })} />
        <input name='message' type="text" placeholder='Message...' className='sendMail__message' ref={register({ required: true })} />

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