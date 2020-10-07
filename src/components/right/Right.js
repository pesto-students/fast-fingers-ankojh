import React from 'react';
import homeIcon from '../../assets/Icon awesome-home.svg'
import IconButton from '../iconButton/IconButton';
import './Right.css'

const Right = (props) => {

  function homeIconClicked(){
    props.goHome && props.goHome();
  }


  return (
    <div className="App-right__panel"> 
      <span>FAST FINGERS</span>
      <IconButton icon={homeIcon} iconHeight={'66px'} onClick={homeIconClicked} />
    </div>
  );
};

export default Right;