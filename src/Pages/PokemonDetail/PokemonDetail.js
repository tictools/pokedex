import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import { BASE_URL } from "../../common/constants";
import ExternalImage from "../../components/ExternalImage/ExternalImage";
import ItemsList from "../../components/ItemsList/ItemsList";
import Loader from "../../components/Loader/Loader";
import DetailCard from "../../components/DetailCard/DetailCard";

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

  return (
    <div>
      {loading ? <Loader /> : <DetailCard id={idPokemon} pokemon={pokemon} />}
      <Link to="/">back</Link>
    </div>
  );
};

const PokemonDetailWithRouter = withRouter(PokemonDetail);

export { PokemonDetail, PokemonDetailWithRouter };
