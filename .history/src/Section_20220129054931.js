import React from 'react';
import './Section.css'

const Section = ({ Icon, title, color, selected }) => {
  return <div className='section' >
     <Icon />
  </div>;
};

export default Section;
