import React from 'react'
import Card from './Card'

const PokeList = ({ loading, list }) => {
  if (loading) return "Loading...";

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
      {list.map(item => (
        <Card key={item.name} poke={item} />
      ))}
    </div>
  );
}

export default PokeList
