import React from "react";
import ExternalImage from "../ExternalImage/ExternalImage";
import ItemsList from "../ItemsList/ItemsList";

export default function DetailCard({ id, pokemon }) {
  const getTypes = () =>
    pokemon &&
    pokemon.types &&
    pokemon.types.map((type) => <li key={type.slot}>{type.type.name}</li>);

  const types = getTypes();

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <ExternalImage
        src={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
      />
      <p>Number of moves: {pokemon.moves.length}</p>
      <p>ID: {id}</p>
      <div>Types: {<ItemsList>{types}</ItemsList>}</div>
    </div>
  );
}
