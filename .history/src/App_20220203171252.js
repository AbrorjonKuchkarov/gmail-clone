import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/counter/mailSlice';
import {login, selectUser} from './features/counter/userSlice'
import { auth } from './firebase';



function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user){
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      }
    })
    //eslint-disable-next-line
  }, [])

  return (
    <Router>
      {!user ? (
        <Login />
      ):(
      <div className="App">
        <Header />

        <div className="app__body">
          <Sidebar />

          <Switch>
            <Route  path="/mail">
              <Mail />
            </Route>
            <Route  path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>
        { sendMessageIsOpen && <SendMail /> }
      </div>

      )}
    </Router>
  );
}

export default App;
