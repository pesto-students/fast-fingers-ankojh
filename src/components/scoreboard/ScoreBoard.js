import React from 'react';
import './ScoreBoard.css'

const ScoreBoard = (props) => {
  return (
    <div className="App-Scoreboard">
      <span className="scoreboard-title">SCORE BOARD</span>

      {
        props.scores && props.scores.map(score =>
          <div className="scoreboard-score">
            <span className="scoreboard-best">PERSONAL BEST</span>
            <span className="scoreboard-data">{score.game} : {score.time}</span>
          </div>
        )
      }
    </div>
  );
};

export default ScoreBoard;