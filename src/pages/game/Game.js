import React, { useEffect, useState } from 'react'
import Input from '../../components/input/Input'
import Timer from '../../components/timer/Timer'
import Word from '../../components/word/Word'
import { getRandomWordFromDictionary } from '../../utils/dictionary'
import mapRange from '../../utils/mapRange'
import './Game.css'


const GAME_STATES = {
  READY: 'ready',
  PLAY: 'play',
  SUCCESS: 'success',
  FAIL: 'fail'
}

function Game(props) {

  const [state, setState] = useState({
    word: '',
    typedWord: '',
    gameState: GAME_STATES.READY
  })

  useEffect(() => {
    setTimeout(() => {
      giveNewWord();
    }, 2000);
    // eslint-disable-next-line
  }, [])


  function getWordLengthFromDifficultyFactor(diffFactor, minFactor, maxFactor, minLength, maxLength){
    const mappedValue = mapRange(diffFactor, [minFactor, maxFactor], [minLength, maxLength]);
    return mappedValue;
  }

  function giveNewWord() {
    const word = getRandomWord();
    setState({
      ...state,
      word,
      typedWord: '',
      gameState: GAME_STATES.PLAY
    })
  }


  function inputChanged(value) {
    setState({
      ...state,
      typedWord: value
    })
  }


  function getRandomWord() {
    const wordLength = parseInt(getWordLengthFromDifficultyFactor(((props.difficultyFactor % 1) % 0.5) * 100, 0, 50, 4, 12))
    return getRandomWordFromDictionary(wordLength);
  }

  function onTimerComplete() {
    setState({
      ...state,
      gameState: GAME_STATES.FAIL
    })
    setTimeout(() => {
      props.onFailure && props.onFailure();
    }, 1000);

  }

  function onWordMatch() {

    setState({
      ...state,
      gameState: GAME_STATES.SUCCESS
    })
    props.onSuccess && props.onSuccess();

    setTimeout(() => {
      giveNewWord();
    }, 1000);
  }


  return (
    <div className="App-Game">
      {
        state.gameState === GAME_STATES.READY &&
        <>
          <div>On Your Keyboard</div>
          <div>Get Set</div>
          <div>GO!</div>
        </>
      }

      {
        state.gameState === GAME_STATES.PLAY &&
        <>
          <Timer onComplete={onTimerComplete} timeInSec={state.word.length / props.difficultyFactor} />
          <Word onMatch={onWordMatch} word={state.word} typedWord={state.typedWord} />
          <Input style={{ textAlign: 'center' }} onKeyUp={inputChanged} />
        </>
      }

      {
        state.gameState === GAME_STATES.SUCCESS &&
        <div>Good Job</div>
      }

      {
        state.gameState === GAME_STATES.FAIL &&
        <div>C'mon! You Can Do Better</div>
      }

    </div>
  )
}

export default Game;