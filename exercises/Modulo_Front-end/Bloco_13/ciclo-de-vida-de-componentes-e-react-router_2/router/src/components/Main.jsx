import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Main extends Component {
  render() {
    return (
      <div>
        <h1> Main Component </h1> 
        <Link to="/about">About</Link>
      </div>
    )
  }
}