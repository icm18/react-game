import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tile from './Tile'
class App extends Component {
  render() {
    return (
      <div className="App">
       <Tile /> 
       <Tile /> 
      </div>
    );
  }
}

export default App;
