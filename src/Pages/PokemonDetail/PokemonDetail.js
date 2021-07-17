import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import { BASE_URL } from "../../common/constants";

const PokemonDetail = (props) => {
  const [pokemon, setPokemon] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const idPokemon = props.match.params.id;

  useEffect(() => {
    const fetchPokemon = (id) => {
      fetch(`${BASE_URL}/${id}`)
        .then((response) => response.json())
        .then((pokemon) => {
          setPokemon(pokemon);
          setLoading(false);
        });
    };

    fetchPokemon(idPokemon);
  }, []);

  const types =
    pokemon &&
    pokemon.types &&
    pokemon.types.map((type) => <li key={type.slot}>{type.type.name}</li>);

  const onLoadImage = () => {
    console.log("loaded");
  };

  return (
    <div>
      {loading ? (
        "loading"
      ) : (
        <div>
          <h2>{pokemon.name}</h2>
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            onLoad={onLoadImage}
            alt={pokemon.name}
          />
          <p>Number of moves: {pokemon.moves.length}</p>
          <p>ID: {idPokemon}</p>
          <div>Types: {<ul>{types}</ul>}</div>
        </div>
      )}
      <Link to="/">back</Link>
    </div>
  );
};

const PokemonDetailWithRouter = withRouter(PokemonDetail);

export { PokemonDetail, PokemonDetailWithRouter };
