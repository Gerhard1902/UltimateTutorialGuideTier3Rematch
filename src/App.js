import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Square extends Component{
  //Bye, constructor, ya no maneja el estado
  render(){
    return(
      <button 
          className="square" 
          onClick={()=> this.props.onClick()/*Llama a la función on click del padre*/}>
        {this.props.value/*Le llega una prop*/} 
      </button>
      );
  }
}




class Board extends Component{
  constructor(props){// board va a manejar ahora el estado,el constructorpasó acá
    super(props);
    this.state={
      squares: Array(9).fill(null),// arreglo, uno para cada cuadrito
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
            <Square value={this.state.squares[i]/*para abajo va a ir props*/}
              onClick={()=> this.handleClick(i)/*La función avisa cuándo se hizo click, el cuadrito va a llamar esa función*/}
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
