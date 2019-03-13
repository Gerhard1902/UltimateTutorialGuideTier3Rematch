import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Square (props){ // function sintax
  return(
      <button 
          className="square" 
          onClick={()=> props.onClick()/*Quitar this*/}>
        {props.value/*Quitar this*/} 
      </button>
  );
}




class Board extends Component{
  constructor(props){
    super(props);
    this.state={
      squares: Array(9).fill(null),
    };
  }

  handleClick(i){
    const squares= this.state.squares.slice();
    squares[i]="X";
    alert(squares);
    this.setState({squares:squares});
  }

  renderSquare(i){
    return( 
            <Square value={this.state.squares[i]}
              onClick={()=> this.handleClick(i)}
            />
            );
  }

  render(){
    const status="Next player X";
    return(
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
      );
  }
}





class App extends Component {//Game
  render() {
    return (
      <div clasName="game">
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

export default App;
