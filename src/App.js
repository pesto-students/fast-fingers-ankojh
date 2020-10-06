import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import Game from './pages/game/Game';
import Home from './pages/home/Home';
import End from './pages/end/End';
import { ResizeContext } from './contexts/resizeContext';
import { loadDictionary, getRandomWordFromDictionary } from './utils/dictionary';
import Left from './components/left/Left';
import Right from './components/right/Right';



//move constants to separate file

const WORD_MIN_LENGTH = 4;
const WORD_MAX_LENGTH = 12;

const DIFFICULTY_LEVELS = [
  { text: 'EASY', difficultyFactor: 1 },
  { text: 'MEDIUM', difficultyFactor: 1.5 },
  { text: 'HARD', difficultyFactor: 2 },
]

const MIN_DIFFICULTY_FACTOR = 1; //can't get easier than EASY
const MAX_DIFFICULTY_FACTOR = 3; // capping the difficulty

const APP_NAME = 'FAST FINGERS'
const APP_NAME_SHORT = 'FF'
const TAG_LINE = 'the ultimate typing game'





function App() {

  const { isWideScreen } = useContext(ResizeContext);

  const [state, setState] = useState({
    playerName: '',
    difficultyFactor: 1,
    gameStartTime: null,
    screen: 'home',
  })


  const [isDictionaryLoading, setIsDictionaryLoading] = useState(false)

  const [previousGames, setPreviousGames] = useState([])

  useEffect(() => {
    fetchDictionary();
  }, [])


  async function fetchDictionary() {
    setIsDictionaryLoading(true)
    await loadDictionary(WORD_MIN_LENGTH, WORD_MAX_LENGTH);
    setIsDictionaryLoading(false)
  }


  function startGame() {

    const gameNumber = previousGames.length;

    setState({
      ...state,
      screen: 'game',
      gameName: `Game ${gameNumber}`,
      gameStartTime: new Date().getTime()
    })
  }

  function endGame(gameResults) {
    const now = new Date().getTime();
    gameResults.endTime = now
    state.previousGames.push(gameResults);
    setState({
      ...state,
      screen: 'end',
    })
  }

  function quitGame() {
    //show alert
    window.close();
  }

  function goToHome() {

    setState({
      ...state,
      playerName: '',
      difficultyFactor: 0,
      screen: 'home'
    })
  }

  function successfulWord() {
    setState({
      ...state,
      difficultyFactor: state.difficultyFactor + 0.1
    })
  }

  return (
    <div className={`App ${isWideScreen ? 'wide-screen' : ''}`}>

      <div
        className="App-left">
        {state.screen != 'home' && <Left 
          previousGames={previousGames}
          screen={state.screen}
          difficultyFactor={state.difficultyFactor} />}
        </div>



      <div className="App-middle" screen={state.screen}>

        {
          state.screen === 'home' &&
          <Home
            app={{ name: APP_NAME, tag: TAG_LINE }}
            difficultyLevels={DIFFICULTY_LEVELS}
            start={startGame}
          />
        }

        {
          state.screen === 'game' &&
          <Game
            difficultyFactor={state.difficultyFactor}
            onSuccess={successfulWord}
            onFailure={endGame}
          />
        }

        {
          state.screen === 'end' &&
          <End
            time={{ start: state.gameStartTime }}
            goAgain={startGame}
          />
        }

      </div>


      <div className="App-right">
        {state.screen != 'home' && <Right screen={state.screen}/>}
      </div>
    </div>
  );
}

export default App;
