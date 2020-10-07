import React from 'react';
import IconButton from '../iconButton/IconButton';
import ScoreBoard from '../scoreboard/ScoreBoard';
import './Left.css'
import playerIcon from '../../assets/Icon material-person.svg';
import levelIcon from '../../assets/Icon awesome-gamepad.svg';
import crossIcon from '../../assets/Icon metro-cross.svg';


const Left = (props) => {


  return (
    <div className="App-left__panel">
      <div className="game-details">
        <IconButton text={props.playerName} icon={playerIcon} />
        <IconButton text={'level'} icon={levelIcon} />
      </div>
      {props.screen === 'game' ? <ScoreBoard scores={props.previousGames} bestGame={props.bestGame} /> : <div></div>}
      <div className="game-end">
      {props.screen === 'game' && <IconButton text={'STOP GAME'} icon={crossIcon} />}
      {props.screen === 'end' && <IconButton text={'QUIT'} />}
      </div>
    </div>
  );
};

export default Left;