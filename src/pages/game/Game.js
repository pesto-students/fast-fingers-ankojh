import React, { useEffect } from 'react'
import Input from '../../components/input/Input'
import Timer from '../../components/timer/Timer'
import Word from '../../components/word/Word'
import './Game.css'

function Game(props) {
  
  return (
    <div className="App-Game">
      <Timer timeInSec={5} />
      <Word word={'window'} typedWord={''}/>
      <Input />
    </div>
  )
}

export default Game;