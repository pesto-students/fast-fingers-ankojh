import React, { useRef, useState } from 'react'
import IconButton from '../../components/iconButton/IconButton'
import LineText from '../../components/lineText/LineText'
import './Home.css'
import logo from './../../assets/Icon awesome-keyboard.svg'
import Input from '../../components/input/Input'
import Dropdown from '../../components/dropdown/Dropdown'
import playIcon from '../../assets/Icon awesome-play.svg'

function Home(props) {

  const [state, setState] = useState({ name: '', difficultyLevel: {} })

  function startGame() {
    props.startGame && props.startGame(state.name, state.difficultyLevel);
  }

  function onDifficultyLevelChange(difficultyLevel){
    setState({
      ...state,
      difficultyLevel
    })
  }

  function onInputKeyUp(name){
    setState({
      ...state,
      name
    })
  }


  return (
    <div className="App-Home">
      <img className="App-logo" src={logo} alt={props.app.name}/>
      <span className="App-name">{props.app.name}</span>
      <LineText className="App-tag" text={props.app.tag} />
      <Input onKeyUp={onInputKeyUp} placeholder={'Type Your Name'}/>
      <Dropdown default={{ text: 'DIFFICULTY LEVEL' }}
        options={props.difficultyLevels} 
        onChange={onDifficultyLevelChange}
        />

      <IconButton onClick={startGame} icon={playIcon} fontSize={'48px'} iconHeight={'71px'} text={'Start Game'} />
    </div>
  )
}


export default Home;
// {/* <Timer timeInSec={5} /> */ }
// {/* <LineText /> */ }
// {/* <ScoreBoard scores={[
//         { game: 'Game 1', time: '1:10' },
//         { game: 'Game 1', time: '1:10' },
//         { game: 'Game 1', time: '1:10' },
//         { game: 'Game 1', time: '1:10' }
//       ]} /> */}



// {/* <Dropdown
//         default={{ text: 'DIFFICULTY LEVEL' }}
//         options={[
//           { text: 'EASY' },
//           { text: 'MEDIUM' },
//           { text: 'HARD' }
//         ]} /> */}