import React, { useEffect, useState } from 'react';

function App() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 898) + 1;

    fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
      .then(response => response.json())
      .then(data => {
        setPokemon({
          name: data.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomId}.png`,
          abilities: data.abilities.map(item => item.ability.name),
          types: data.types.map(item => item.type.name),
          base_experience: data.base_experience
        });
      })
      .catch(error => console.log(error));
  }, []);

  if (!pokemon) return <p style={{ color: "white" }}>Carregando...</p>;

  return (
    <div style={{
      backgroundColor: '#8e24aa',
      padding: '20px',
      borderRadius: '10px',
      color: 'white',
      maxWidth: '300px',
      margin: '20px auto',
      textAlign: 'center'
    }}>
      <h2>Meu Pokémon Aleatório</h2>
      <img src={pokemon.image} alt={pokemon.name} style={{ width: '150px' }} />
      <h3 style={{ textTransform: "capitalize" }}>{pokemon.name}</h3>
      <p><strong>Tipos:</strong> {pokemon.types.join(', ')}</p>
      <p><strong>Habilidades:</strong> {pokemon.abilities.join(', ')}</p>
      <p><strong>Experiência Base:</strong> {pokemon.base_experience}</p>
    </div>
  );
}

export default App;