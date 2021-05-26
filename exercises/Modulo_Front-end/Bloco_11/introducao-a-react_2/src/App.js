import React, { Component } from 'react';
import InfoPokemon from './InfoPokemon'
import Pokemonlist from './data.js';
class App extends Component {
  render() {

    return (
      <div>
          <div>
            <h1 className='title'>Pokedex</h1>
          <div className='pokedex'>
            {Pokemonlist.map((item, index) => (
            <InfoPokemon pokemon={item} key={index}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
