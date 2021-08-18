import React, { useState, useEffect } from 'react';
import useAbility from './hooks/useAbility';

function App() {

  //Use State

  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(10);
  const [abilities, setPokeUrl] = useAbility();

  // DidMount, DidUpdate, WillUnmount
  useEffect(() => {
    const getPokemons = async () => {
      const endpoint = `https://pokeapi.co/api/v2/pokemon?offset=251&limit=${limit}`;
      const response = await fetch(endpoint);
      const { results } = await response.json();
      setPokemons(results);
    };
    getPokemons();
  }, [limit])

  // Will Umount

  // useEffect(() => { return () => alert('unmount')}, []);


  const handleMorePokemons = () => {
    setLimit(limit + 10)
  }

  return (
    <div>
      <h1>Pokemons</h1>
      <p>{abilities.toString()}</p>
      <button type="button" onClick={ handleMorePokemons } > Buscar +10 Pokemons</button>
      <ul>  
      {
        pokemons.map((({ name, url }) => (
        <li key={ name } onClick={() => setPokeUrl(url) }>{ name }</li>
        )))
      }
      </ul>
    
    </div>
  )
}

export default App
