import React, { useState, useEffect } from "react";

import ButtonBar from "../../components/ButtonBar/ButtonBar";
import FilterBar from "../../components/FilterBar/FilterBar";
import ItemsList from "../../components/ItemsList/ItemsList";
import ItemList from "../../components/ItemList/ItemList";
import Loader from "../../components/Loader/Loader";
import usePokemons from "../../hooks/usePokemons";

import { BASE_URL, EMPTY_STRING } from "../../common/constants";
import { getIdFromBaseUrl } from "../../common/utils";

export default function PokemonList({ page, handleChangePage }) {
  const { pokemons, loading, pageStatus } = usePokemons(page);
  const [filterPokemons, setFilterPokemons] = useState(EMPTY_STRING);

  const handlePrevious = () => handleChangePage(page - 1);
  const handleNext = () => handleChangePage(page + 1);

  const handleFilterChange = (filter) => {
    setFilterPokemons(filter);
  };

  const getFilteredPokemons = (pokemons, filter) => {
    return pokemons.filter((pokemon) => pokemon.name.includes(filter));
  };

  const getFormattedPokemons = (pokemons) =>
    pokemons &&
    pokemons.map((pokemon) => {
      const id = getIdFromBaseUrl(pokemon.url, BASE_URL);
      return <ItemList key={id} id={id} name={pokemon.name} />;
    });

  const filteredPokemons = getFilteredPokemons(pokemons, filterPokemons);
  const formattedPokemons = getFormattedPokemons(filteredPokemons);

  return (
    <div>
      <h2>Pokemon List</h2>
      {loading ? (
        <Loader />
      ) : (
        <>
          <FilterBar handleFilter={handleFilterChange} />
          <ItemsList>{formattedPokemons}</ItemsList>
          <ButtonBar
            handlePrevious={handlePrevious}
            handleNext={handleNext}
            status={pageStatus}
            page={page}
          />
        </>
      )}
    </div>
  );
}
