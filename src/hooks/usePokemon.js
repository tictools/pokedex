import { useState, useEffect } from "react";
import { BASE_URL } from "../common/constants";

export default function usePokemon(id) {
  const [pokemon, setPokemon] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = (id) => {
      fetch(`${BASE_URL}/${id}`)
        .then((response) => response.json())
        .then((pokemon) => {
          setPokemon(pokemon);
          setLoading(false);
        });
    };

    fetchPokemon(id);
  }, []);

  return { pokemon, loading };
}
