import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Square extends Component{
  constructor(props){// agregué constructor para manipular state
    super(props);
    this.state={
      value:null,
    };
  }
  render(){
    return(
      <button className="square" onClick={()=>{this.setState({value:"X"})}/*La función*/}>
        {this.state.value/*Ahora no es props, es state*/} 
      </button>
      );
  }
}




class Board extends Component{
  renderSquare(i){
    return <Square value={i} />;
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
