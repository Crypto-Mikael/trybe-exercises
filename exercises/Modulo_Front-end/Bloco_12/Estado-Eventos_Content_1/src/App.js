import React, { Component } from  'react';
import './App.css';



class App extends Component {
  constructor() {
    super();  
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      numerosDeCliques: 0,
      color: 'black'
    }
  }

  handleClick() {
    this.setState((estate, _props) => ({
      numerosDeCliques: estate.numerosDeCliques + 1,
      color: estate.numerosDeCliques % 2 ? 'green' : 'black',
    }))
    console.log(this.state.color)
  }

  render() {
    console.log(this)
    return (
      <div>
        <button style={{color: this.state.color}} onClick={this.handleClick}>{this.state.numerosDeCliques}</button>
      </div>
      );
  }
}

export default App;
