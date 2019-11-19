import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import peonNegro from './images/peon-negro.png'
import peonBlanco from './images/peon-blanco.png'
import reyNegro from './images/rey-negro.png'
import reyBlanco from './images/rey-blanco.png'
import reinaNegra from './images/reina-negra.png'
import reinaBlanca from './images/reina-blanca.png'
import caballoNegro from './images/caballo-negro.png'
import caballoBlanco from './images/caballo-blanco.png'
import alfilNegro from './images/alfil-negro.png'
import alfilBlanco from './images/alfil-blanco.png'
import torreNegra from './images/torre-negra.png'
import torreBlanca from './images/torre-blanca.png'

/* Chess Game*/
class App extends Component {
  constructor(props) {
    super(props);
  }

  createPiece(row, column, name, color){
    return {row: row, column: column, name: name, color: color }
  }
  createPieces(){
    let pieces = [ 
      this.createPiece(1, 1, "tower", "black"), this.createPiece(1, 2, "horse", "black"),  this.createPiece(1, 3, "bishop", "black"), this.createPiece(1, 4, "king", "black"),
      this.createPiece(1, 5, "queen", "black"), this.createPiece(1, 6, "bishop", "black"), this.createPiece(1, 7, "horse", "black"), this.createPiece(1, 8, "tower", "black"),
    ];
    for (let column = 1; column <= 8; column++) {
      pieces = pieces.concat(this.createPiece(2, column, "pawn", "black"))
    }
    pieces = pieces.concat([ 
      this.createPiece(8, 1, "tower", "white"), this.createPiece(8, 2, "horse", "white"),  this.createPiece(8, 3, "bishop", "white"), this.createPiece(8, 4, "king", "white"),
      this.createPiece(8, 5, "queen", "white"), this.createPiece(8, 6, "bishop", "white"), this.createPiece(8, 7, "horse", "white"), this.createPiece(8, 8, "tower", "white"),
    ]);
    for (let column = 1; column <= 8; column++) {
      pieces = pieces.concat(this.createPiece(7, column, "pawn", "white"))
    }
    return pieces;
  }
  

  render() {
    return (
      <Game pieces={this.createPieces()}/>
    );
  }
}

class Board extends Component {
  constructor(props){
    super(props);
  }

  renderSquare(row, column, color){
	  let piece = this.props.pieces.find((piece) => {
		  return piece.row === row && piece.column === column;
    });
    return(
      <Square row={row} column={column} color={color} piece={piece}/>
    );
  };
  
   getColor(row, column){
    let color = "gray";
    if((row % 2 === 0 && column % 2 === 1 ) || (row % 2 === 1 && column % 2 === 0 )){
      color= "#dbe391";
    }
    return color;
  }

  renderRow(row, columns){
    return( 
      
      <div className="board-row">
          {columns.map((column) =>  { 
             
             return this.renderSquare(row, column, this.getColor(row, column))
             })
          }
        </div>
    );
  };

  renderBoard(){
    const columns = [1, 2,3,4,5,6,7,8];
    const rows = [1, 2,3,4,5,6,7,8];
    
    return (rows.map((row) => {
      return this.renderRow(row, columns)
    }
        
    ));
   // return (rowItems);
  };
  
  render(){
    return (
      <div>
        <div className="status"></div>

        {this.renderBoard()} 
        
      </div>);
  }
}

class Square extends React.Component {
  render() {
	  let image;
	  if(this.props.piece){
      console.log(this.props);
		  if(this.props.piece.name === "pawn" && this.props.piece.color === "white"){
			  image = <img src={peonBlanco}/>
		  }else if(this.props.piece.name === "pawn" && this.props.piece.color === "black"){
			  image = <img src={peonNegro}/>
      }else if(this.props.piece.name === "king" && this.props.piece.color === "white"){
			  image = <img src={reyNegro}/>
		  }else if(this.props.piece.name === "king" && this.props.piece.color === "black"){
			  image = <img src={reyBlanco}/>
		  }else if(this.props.piece.name === "queen" && this.props.piece.color === "white"){
			  image = <img src={reinaNegra}/>
		  }else if(this.props.piece.name === "queen" && this.props.piece.color === "black"){
			  image = <img src={reinaBlanca}/>
		  }else if(this.props.piece.name === "tower" && this.props.piece.color === "white"){
			  image = <img src={torreNegra}/>
		  }else if(this.props.piece.name === "tower" && this.props.piece.color === "black"){
			  image = <img src={torreBlanca}/>
		  }else if(this.props.piece.name === "bishop" && this.props.piece.color === "white"){
			  image = <img src={alfilNegro}/>
		  }else if(this.props.piece.name === "bishop" && this.props.piece.color === "black"){
			  image = <img src={alfilBlanco}/>
		  }else if(this.props.piece.name === "horse" && this.props.piece.color === "white"){
			  image = <img src={caballoNegro}/>
		  }else if(this.props.piece.name === "horse" && this.props.piece.color === "black"){
			  image = <img src={caballoBlanco}/>
		  }
      
	  }
    return (
      <button className="square" style={{backgroundColor : this.props.color}} key={this.props.row} >
      
      {image}
      </button>
    );
  }
}

class Pieze extends Component{
  constructor(props){
    super(props);
  }
}

class Game extends Component{
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props.pieces);
    return(
      <div className="game">
        
        <div className="game-board">
          <Board pieces={this.props.pieces}/>
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}


render(<App />, document.getElementById('root'));
