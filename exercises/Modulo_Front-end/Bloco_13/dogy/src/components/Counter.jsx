import React, { Component } from  'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogyImage: '',
      loading: 'loading...'
    };
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
      this.setState({
        dogyImage: json.message,
        loading: undefined,
      })
    });
  }

  render() {
    const { dogyImage, loading } = this.state
    return (
      <div className='photo'>
        <h1>{ loading }</h1>
        <button>DOGYYY</button>
        <img src={dogyImage}></img>
      </div>
    );
  }
}
