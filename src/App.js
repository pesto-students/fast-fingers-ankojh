import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Game from './pages/game/Game';
import StartGame from './pages/startGame/StartGame';
import EndGame from './pages/endGame/EndGame';


//* project notes
// min number of letter for word == 4, 4/2 = 2seconds
// use right empty area as developer console


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/end" component={EndGame} exact />
          <Route path="/game" component={Game} exact />
          <Route path="/" component={StartGame} exact/>
        </Switch>
      </div>
    </Router>
  );
} 

export default App;
