import { useState, useEffect } from 'react';

const useAbility = () => {
  const [pokeUrl, setPokeUrl] = useState('');
  const [abilities, setAblities] = useState([]);
  useEffect(() => {
    const getAbilities = async () => {
      if (pokeUrl) {
        const result = await fetch (pokeUrl);
        const { abilities: abilitiesList } = await result.json();
        const abilitiesNames = abilitiesList.map(({ ability: { name } }) => name );
        setAblities(abilitiesNames);
      }
    }
    getAbilities();
  }, [pokeUrl])
  return [abilities, setPokeUrl];
}

export default useAbility;