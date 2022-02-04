import { Button } from '@mui/material';
import React from 'react';
import { auth, provider } from './firebase';
import { login } from './features/counter/userSlice';
import './Login.css';
import { useDispatch } from 'react-redux';


const Login = () => {
   const dispatch = useDispatch();

   const signIn = () => {
      auth.signInWithPopup(provider).then(({user}) =>{
         console.log(user);
         dispatch(
            login({
               displayName: user.displayName,
               email: user.email,
               photoUrl: user.photoURL,
            })
         )
      } ).catch((error) => alert(error.message) );
   }

  return <div className='login' >
     <div className="login__container">
        <div className="login__containerTop">
        <img src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/512/Gmail-icon.png" alt="gmail" />
        <h2>Gmail</h2>
        </div>

        <div className="login__containerBottom">
         <Button variant='contained' color='primary' onClick={signIn} >Login</Button>
        </div>
       
     </div>
  </div>;
};

export default Login;
