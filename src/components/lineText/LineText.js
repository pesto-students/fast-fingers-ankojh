import React from 'react';
import './LineText.css'
const LineText = (props) => {
  return (
    <div className={`App-line-text ${props.className}`}>
      <span className="line"></span>
      <span className="text">{props.text}</span>
      <span className="line"></span>
    </div>
  );
};

export default LineText;