import React, { Component } from 'react'
import { Switch , Route } from 'react-router-dom';
import Register from './components/Register';
import Home from './components/Home';
import Login from './components/Login';
import ClientRegister from './components/ClientRegister';

export default class App extends Component {
  render() {
    return (
      <>
      <Switch>
          <Route path="/register" component={ Register }/>
          <Route path="/list" component={ ClientRegister }/>
          <Route path="/login" component={ Login }/>
          <Route exact path="/" component={ Home }/>
      </Switch>
      </>
    )
  }
}
