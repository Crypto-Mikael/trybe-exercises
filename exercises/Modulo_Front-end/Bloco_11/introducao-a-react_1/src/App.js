import React, { Component } from 'react'
import Name from './Component';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

class App extends Component {
  render() {
    let array = ['lavar a roupa','lavar louça','arrumar a cama']
    return (
      <div>
        <Name />
        {Task('roberto')}
        {array.map((value) => Task(value))}
      </div>
    );
  }
}

export default App;
