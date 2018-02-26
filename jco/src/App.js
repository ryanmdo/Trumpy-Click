import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import GameInstance from './components/GameInstance'
//import ImageTile from './components/ImageTile'



class App extends Component {
  render() {
    return (
      <div className="App">
        
        <GameInstance/>
      </div>
    );
  }
}

export default App;
