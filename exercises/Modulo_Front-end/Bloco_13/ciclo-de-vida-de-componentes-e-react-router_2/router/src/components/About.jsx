import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class About extends Component {
  render() {
    return (
      <div>
        <p> About Component</p>
        <Link to="/">Home</Link>
      </div>
    )
  }
}
