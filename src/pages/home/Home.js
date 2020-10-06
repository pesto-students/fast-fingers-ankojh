import React, { useEffect, useState } from 'react'
import Dropdown from '../../components/dropdown/Dropdown'
import IconButton from '../../components/iconButton/IconButton'
import LineText from '../../components/lineText/LineText'
import ScoreBoard from '../../components/scoreboard/ScoreBoard'
import Timer from '../../components/timer/Timer'
import './Home.css'
// import data from './../../assets/dictionary.json'

function Home(props) {

  const [state, setState] = useState({ word: '' })

  function startGame(){

  }



  return (
    <div className="App-Home">
      Ankit
    
    </div>
  )
}


export default Home;
// {/* <Timer timeInSec={5} /> */ }
// {/* <input onKeyUp={e => { setState({ word: e.target.value }) }} /> */ }
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