import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Button from "../../components/Button/Button";
import ButtonBar from "../../components/ButtonBar/ButtonBar";
import ItemsList from "../../components/ItemsList/ItemsList";

import {
  BASE_URL,
  EMPTY_ARRAY,
  INITIAL_PAGINATION_STATUS_VALUE,
} from "../../common/constants";
import { getIdFromBaseUrl, getCurrentPage } from "../../common/utils";

export default function PokemonList({ page, handleChangePage }) {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState(EMPTY_ARRAY);
  const [pageStatus, setPageStatus] = useState(INITIAL_PAGINATION_STATUS_VALUE);

  useEffect(() => {
    const fetchPokemons = () => {
      const currentPage = getCurrentPage(page);
      setLoading(true);
      fetch(`${BASE_URL}?offset=${currentPage}&limit=10`)
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

  const content =
    pokemons &&
    pokemons.map((pokemon) => {
      const id = getIdFromBaseUrl(pokemon.url, BASE_URL);
      return (
        <li key={id}>
          <Link to={`/detail/${id}`}>{pokemon.name}</Link>
        </li>
      );
    });

  const handlePrevious = () => handleChangePage(page - 1);
  const handleNext = () => handleChangePage(page + 1);

  return (
    <div>
      <h2>Pokemon List</h2>
      {loading ? (
        "loading..."
      ) : (
        <>
          <ItemsList>{content}</ItemsList>
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
