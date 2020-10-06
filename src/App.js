import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import Game from './pages/game/Game';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import End from './pages/end/End';
import { ResizeContext } from './contexts/resizeContext';


const MIN_LENGTH = 4;
const MAX_LENGTH = 12;
const MIN_DIFFICULTY_LEVEL = 1;
const MAX_DIFFICULTY_LEVEL = 2;

function App() {

  const { isWideScreen } = useContext(ResizeContext);

  const [state, setState] = useState({
    playerName: '',
    difficultyFactor: null,
    isGameStarted: false,
    isGameEnded: false,
    screen: 'home',
    words: {}
  })

  const [previousGames, setPreviousGames] = useState([])

  useEffect(()=>{
    getDictionary();
  },[])


  async function getDictionary(){
      const wordArray = await (await fetch('/data/dictionary.json')).json();
      const wordsByLength = wordArray.reduce((acc, word)=>{
        const length = word.length;

        if(length<MIN_LENGTH || length > MAX_LENGTH){ //only serving 4-12characters words
          return acc;
        }

        if(acc[length]){
          acc[length].push(word);
        }
        else{
          acc[length] = [word];
        }

        return acc;

      },{})

      setState({
        ...state,
        words: wordsByLength
      })
  }



  function getRandomWord(){

  }



  function startGame() {
    setState({
      ...state,
      screen: 'game'
    })
  }

  function endGame(gameResults) {
    state.previousGames.push(gameResults);
    setState({
      ...state,
      screen: 'end'
    })
  }

  function quitGame() {

  }

  function goToHome() {

  }

  const showHome = !state.isGameStarted && !state.isGameEnded;

  return (
    <div className={`App ${isWideScreen ? 'wide-screen' : ''}`}>
      <div previousgames={previousGames} screen={state.screen}>left</div>
      <div screen={state.screen}>
        {state.screen === 'home' && <Home />}
        {state.screen === 'game' && <Game />}
        {state.screen === 'end' && <End />}
      </div>
      <div screen={state.screen}>right</div>
    </div>
  );
}

export default App;
