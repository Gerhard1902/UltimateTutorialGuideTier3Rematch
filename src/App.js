import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Square (props){
  return(
      <button 
          className="square" 
          onClick={()=> props.onClick()}>
        {props.value} 
      </button>
  );
}




class Board extends Component{
  constructor(props){
    super(props);
    this.state={
      squares: Array(9).fill(null),
      isNext:true,//CODE LOGIC
    };
  }

  handleClick(i){
    const squares= this.state.squares.slice();
    squares[i]=this.state.isNext?"X":"O";//code logic
    alert(squares);
    this.setState({squares:squares, isNext:!this.state.isNext});
  }

  renderSquare(i){
    return( 
            <Square value={this.state.squares[i]}
              onClick={()=> this.handleClick(i)}
            />
            );
  }

  render(){
    const status="Next player "+(this.state.isNext?"X":"O");
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
