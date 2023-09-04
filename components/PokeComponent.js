import React, { useEffect, useState } from 'react';

const PokemonComponent = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch('your-api-url-here')
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (!pokemon) {
    return <div>No data available</div>;
  }
  
  return (
    <div>
      <h1>{pokemon.names.English}</h1>
      <img src={pokemon.assets.image} alt={pokemon.names.English} />
      <p>Stamina: {pokemon.stats.stamina}</p>
      <p>Attack: {pokemon.stats.attack}</p>
      <p>Defense: {pokemon.stats.defense}</p>
      <p>Type: {pokemon.primaryType.names.English} / {pokemon.secondaryType.names.English}</p>
      {/* ... Other details ... */}
    </div>
  );
};

export default PokemonComponent;
