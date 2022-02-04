import React from 'react';
import "./SendMail.css"
import CloseIcon from '@mui/icons-material/Close';

const SendMail = () => {
  return <div className='sendMail'>
     <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon className='sendMail__close' />
     </div>
  </div>;
};

export default SendMail;