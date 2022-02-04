import React from 'react';
import "./EmailList.css"
import Section from './Section';
import EmailRow from './EmailRow';
import { Checkbox, IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';


const EmailList = () => {
  return <div className='emailList' >
     <div className="emailList__settings">
        <div className="emailList__settingsLeft">
           <Checkbox />
           <IconButton>
              <ArrowDropDownIcon />
           </IconButton>
           <IconButton>
              <RedoIcon />
           </IconButton>
           <IconButton>
              <MoreVertIcon />
           </IconButton>
        </div>
        <div className="emailList__settingsRight">
           <IconButton>
              <ChevronLeftIcon />
           </IconButton>
           <IconButton>
              <ChevronRightIcon />
           </IconButton>
           <IconButton>
              <KeyboardHideIcon />
           </IconButton>
           <IconButton>
              <SettingsIcon />
           </IconButton>
        </div>
     </div>

     <div className="emailList__section">
        <Section Icon = {InboxIcon} title='primary' color='red' selected />
        <Section Icon = {PeopleIcon} title='Social' color='#1a73e8'  />
        <Section Icon = {LocalOfferIcon} title='Promotions' color='green'  />
     </div>

     <div className="emailList__List">
         <EmailRow />
     </div>
  </div>;
};

export default EmailList;
