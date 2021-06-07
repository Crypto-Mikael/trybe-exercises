import React, { Component } from  'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogyImage: undefined,
      loading: true,
    };
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
      this.setState({
        dogyImage: json.message,
        loading: false,
      });
    });
  }

  handleClick = () => {
    
  }

  render() {
    const { dogyImage, loading } = this.state;
    return (
      <div className='photo'>
        { loading ? <span>loading...</span> : <img src={ dogyImage } alt='dogyyy'></img> }
        <button onClick={}>DOGYYY</button>
      </div>
    );
  }
}
