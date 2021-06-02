import React, { Component } from  'react';
import './App.css';
import Form from './Form'


class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();  
  }

  render() {
    console.log(this)
    return (
      <div>
        <Form />
      </div>
      );
  }
}

export default App;
