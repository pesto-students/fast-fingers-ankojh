import React from 'react';
import homeIcon from '../../assets/Icon awesome-home.svg'
import './Right.css'

const Right = () => {
  return (
    <div className="App-right__panel"> 
      <span>FAST FINGERS</span>
      <img src={homeIcon} alt={'Home'}/>
    </div>
  );
};

export default Right;