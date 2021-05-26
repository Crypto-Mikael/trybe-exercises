import React, { Component } from 'react';
import InfoPokemon from './InfoPokemon'
import Pokemonlist from './data.js';
class App extends Component {
  render() {

    return (
      <div className='pokedex'>
        <h1 className='title'>Pokedex</h1>
        <div>
        {Pokemonlist.map((item, index) => (
        <InfoPokemon pokemon={item} key={index}/>
        ))}
        </div>
      </div>
    );
  }
}

export default App;
