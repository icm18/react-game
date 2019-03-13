import React, { Component } from 'react';
import logo from './logo.svg';
import apu1 from './apu1.gif';
import apu2 from './apu2.jpeg';
import bart1 from './bart1.jpg';
import bart2 from './bart2.png';
import homer1 from './homer1.jpeg';
import homer2 from './homer2.jpeg';
import krusty1 from './krusty1.jpeg';
import krusty2 from './krusty2.png';
import lisa1 from './lisa1.png';
import lisa2 from './lisa2.jpeg';
import marge1 from './marge1.png';
import marge2 from './marge2.jpeg';
import './App.css';
import Tile from './Tile'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tilesRow1: [apu1, apu2, bart1, bart2, homer1, homer2],
      tilesRow2: [krusty1, krusty2, lisa1, lisa2, marge1, marge2],
      selectedTiles:[],
      message: ""
    }
    this.shuffle = this.shuffle.bind(this);
    this.onTileClick = this.onTileClick.bind(this);
  }

  onTileClick = (tile) => {
    let imageAddress = tile.target.src;
if (this.state.selectedTiles.length == 1) {
	if (imageAddress.includes(this.state.selectedTiles[0])) {
    	this.setState({
    		message: "YOU LOSE"
    	})
    } else {
    	this.setState({
    		selectedTiles: [],
          	message: ""
   	 	})
    }
} else {
	this.setState({
    	selectedTiles: [tile.target.src],
      	message: ""
    })
}
    console.log("TILE ", tile.target.src);
    console.log("TILE2 ", apu1);

    let arr = [apu1, apu2, bart1, bart2, homer1, homer2, krusty1, krusty2, lisa1, lisa2, marge1, marge2];

    console.log("beforeshuffle", arr)

    arr = this.shuffle(arr);

    console.log("aftershuffle", arr)

    this.setState({

      tilesRow1: [arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]],

      tilesRow2: [arr[6], arr[7], arr[8], arr[9], arr[10], arr[11]]

    })

  }


  shuffle = (array) => {
    var i = array.length,
      j = 0,
      temp;

    while (i--) {

      j = Math.floor(Math.random() * (i + 1));

      // swap randomly chosen element with current element
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;

    }

    return array;
  }
  render() {
    return (
      <div className="App container">
      <h2>{this.state.message}</h2>
        <div className="row">
          {this.state.tilesRow1.map((img, i) =>

            <Tile image={img} key={i} onClick={this.onTileClick} />
          )
          }
        </div>
        <div className="row">
          {this.state.tilesRow2.map((img, i) =>
            <Tile image={img} key={i + 6} onClick={this.onTileClick}/>
          )
          }
        </div>
      </div>
    );
  }
}


export default App;
