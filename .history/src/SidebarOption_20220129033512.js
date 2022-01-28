import React from 'react';
import "./SidebarOption.css"

const SidebarOption = ({ Icon, number, title, selected }) => {
  return <div className='sidebarOption' >
     <Icon />
     <h3>{title}</h3>
     <p>{number}</p>
  </div>;
};

export default SidebarOption;
