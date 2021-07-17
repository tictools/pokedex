import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PokemonList from "../Pages/PokemonList/PokemonList";
import { PokemonDetailWithRouter as PokemonDetail } from "../Pages/PokemonDetail/PokemonDetail";

import { PAGINATION } from "../common/constants";

export const App = () => {
  const [page, setPage] = useState(PAGINATION.INITIAL_VALUE);

  const handleChangePage = (value) => {
    setPage(value);
  };

  return (
    <div>
      <h1>Pokédex</h1>
      <Router>
        <Switch>
          <Route exact path="/">
            <PokemonList page={page} handleChangePage={handleChangePage} />
          </Route>
          <Route path="/detail/:id">
            <PokemonDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
