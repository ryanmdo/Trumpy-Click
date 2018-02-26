import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import GameInstance from './components/GameInstance'
//import ImageTile from './components/ImageTile'



class App extends Component {
  render() {
    return (
      <div className='container'>
        <Header/>
        <div className="App">
        
          <GameInstance/>
        </div>
      </div>
    );
  }
}

export default App;
