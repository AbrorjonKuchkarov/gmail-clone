import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import Login from './Login';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/counter/mailSlice';
import {selectUser} from './features/counter/userSlice'

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);

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
