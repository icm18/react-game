import React, { Component } from 'react';
import './App.css';

const Tile = (props) => (
    <div className="col"> 
  <img src={props.image} onClick={props.onClick} className="tile" />
  
    </div>
  )
  
  export default Tile;
