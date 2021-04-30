import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TypeButton from './TypeButton'

const Card = ({ poke }) => {
  const [thisPokemon, setThisPokemon] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(poke.url).then(res => {
      setLoading(false);
      setThisPokemon(res.data);
    });
  }, [poke]);

  const NameToTitleCase = (name) => {
    let array = name.split('');
    array[0] = array[0].toUpperCase();
    return array.join('');
  };

  if (loading) return (
    <div className="card">
      <p>Loading...</p>
    </div>
  );

  return (
    <div className="card">
      <img
        src={thisPokemon.sprites && thisPokemon.sprites.front_default} alt={thisPokemon.name && thisPokemon.name}
        className="mx-auto"
      />
      <p>
        {`#${thisPokemon.id && thisPokemon.id} ${thisPokemon.name && NameToTitleCase(thisPokemon.name)}`}
      </p>
      <p className="flex flex-row justify-around">{thisPokemon.types && thisPokemon.types.map(typeObj => (
        <TypeButton key={typeObj.type.name} thisType={typeObj.type.name} />
      ))}</p>
    </div>
  );
}

export default Card
