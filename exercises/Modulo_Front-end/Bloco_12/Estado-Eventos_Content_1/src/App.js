import React, { Component } from  'react';
import './App.css';



class App extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log('oi')
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>clicke aki!</button>
      </div>
      );
  }
}

export default App;
