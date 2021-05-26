import React, { Component } from 'react'
import './InfoPokemon.css'

class InfoPokemon extends Component {
  render() {

      const { name, type, averageWeight, image } = this.props.pokemon;

    return (
      <div className='pokemon_cotainer'>
        <div>
          <p> { name } </p>
          <p> { type } </p>
          <p> { `${averageWeight.value} ${averageWeight.measurementUnit}` } </p>
        </div>
          <img src={ image } alt='Pokemons Images'/>
      </div>
    );
  }
}

export default InfoPokemon;