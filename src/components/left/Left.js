import React from 'react';
import IconButton from '../iconButton/IconButton';
import ScoreBoard from '../scoreboard/ScoreBoard';
import './Left.css'

const Left = (props) => {
  return (
    <div className="App-left__panel">
      <IconButton />
      <IconButton />
      <ScoreBoard />
      <IconButton />

      {/* for quit no icon */}
      <IconButton /> 
    </div>
  );
};

export default Left;