import React, { useEffect } from 'react'
import './Game.css'

function Game(props) {
  console.log('game')
  useEffect(() => {
    // no name or difficulty redirect to startgame
  }, [])

  return (
    <div className="App-Game">
      Game
    </div>
  )
}

export default Game;