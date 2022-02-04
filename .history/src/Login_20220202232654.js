import { Button } from '@mui/material';
import React from 'react';
import './Login.css';


const Login = () => {
  return <div className='login' >
     <div className="login__container">
        <div className="login__containerTop">
        <img src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/512/Gmail-icon.png" alt="gmail" />
        <h2>Gmail</h2>
        </div>

        <div className="login__containerBottom">
         <Button>Login</Button>
        </div>
       
     </div>
  </div>;
};

export default Login;
