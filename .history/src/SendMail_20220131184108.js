import React from 'react';
import "./SendMail.css"
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';

const SendMail = () => {
   const { register, handleSubmit, watch, errors } = useForm();

   const onSubmit = (formData) => {
      console.log(formData);
   }
  return <div className='sendMail'>
     <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon className='sendMail__close' />
     </div>

     <form onSubmit={handleSubmit(onSubmit)} >
        <input {...register( 'to', {required: true})} type="text" placeholder='To' />
        {/* {errors.to && <p className='sendMail__error' > To is required! </p>  } */}
        <input {...register('subject', {required: true})} type="text" placeholder='Subject'  />
        <input {...register ('message', {required: true} )} type="text" placeholder='Message...' className='sendMail__message'  />

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