import React from 'react';
import './Section.css'

const Section = ({ Icon, title, color, selected }) => {
  return <div className={`section ${selected && 'section--selected'} `} >
     <Icon />
     <h3>{ title }</h3>

  </div>;
};

export default Section;
