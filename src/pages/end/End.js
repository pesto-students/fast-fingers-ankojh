import React from 'react'
import IconButton from '../../components/iconButton/IconButton'
import './End.css'
import reloadIcon from '../../assets/Icon open-reload.svg'

function End(props) {

  function playAgainClicked(){
    props.goAgain && props.goAgain();
  }

  return (
    <div className="App-EndGame">
      <span className="end__game-name">SCORE : {props.game.gameName}</span>
      <span className="end__game-time">{props.game.gameTime}</span>
      {props.bestGame === props.game.gameName && <span className="end__game-high">New High Score</span>}
      <IconButton onClick={playAgainClicked} fontSize={'54px'} text={'PLAY AGAIN'} icon={reloadIcon}/>
    </div>
  )
}

export default End;
