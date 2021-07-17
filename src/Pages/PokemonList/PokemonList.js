import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ButtonBar from "../../components/ButtonBar/ButtonBar";
import FilterBar from "../../components/FilterBar/FilterBar";
import ItemsList from "../../components/ItemsList/ItemsList";
import Loader from "../../components/Loader/Loader";

import {
  BASE_URL,
  EMPTY_ARRAY,
  EMPTY_STRING,
  INITIAL_PAGINATION_STATUS_VALUE,
} from "../../common/constants";
import { getIdFromBaseUrl, getCurrentOffset } from "../../common/utils";

export default function PokemonList({ page, handleChangePage }) {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState(EMPTY_ARRAY);
  const [filterPokemons, setFilterPokemons] = useState(EMPTY_STRING);
  const [pageStatus, setPageStatus] = useState(INITIAL_PAGINATION_STATUS_VALUE);

  useEffect(() => {
    const fetchPokemons = () => {
      const currentOffset = getCurrentOffset(page);
      setLoading(true);
      fetch(`${BASE_URL}?offset=${currentOffset}&limit=10`)
        .then((response) => response.json())
        .then(({ results, previous, next }) => {
          setPokemons(results);
          setPageStatus({
            ...pageStatus,
            previous,
            next,
          });
          setLoading(false);
        });
    };
    fetchPokemons();
  }, [page]);

  const handlePrevious = () => handleChangePage(page - 1);
  const handleNext = () => handleChangePage(page + 1);

  const getFilteredPokemons = (pokemons, filter) => {
    return pokemons.filter((pokemon) => pokemon.name.includes(filter));
  };

  const handleFilterChange = (filter) => {
    setFilterPokemons(filter);
  };

  const filteredPokemons = getFilteredPokemons(pokemons, filterPokemons);

  const getFormattedPokemons = (pokemons) => {
    return (
      pokemons &&
      pokemons.map((pokemon) => {
        const id = getIdFromBaseUrl(pokemon.url, BASE_URL);
        return (
          <li key={id}>
            <Link to={`/detail/${id}`}>{pokemon.name}</Link>
          </li>
        );
      })
    );
  };

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
