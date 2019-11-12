import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';


/* Chess Game*/
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Game />
    );
  }
}

class Board extends Component {
  
  renderSquare(row, column, color){
    return(
      <Square row={row} column={column} color={color} />
    );
  };
  
  getColor(row, column){
    let color = "gray";
    if((row % 2 == 0 && column % 2 == 1 ) || (row % 2 == 1 && column % 2 == 0 )){
      color= "white";
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
    return (
      <button className="square" style={{"background-color" : this.props.color}}>
        {this.props.row}-{this.props.column}
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
  render(){
    return(
      <div class="game">
        
        <div className="game-board">
          <Board />
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
