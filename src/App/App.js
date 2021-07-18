import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import PokemonList from '../pages/PokemonList/PokemonList'
import { PokemonDetailWithRouter as PokemonDetail } from '../pages/PokemonDetail/PokemonDetail'

import { PAGINATION } from '../common/constants'
import styles from './App.css'

export const App = () => {
  const [page, setPage] = useState(PAGINATION.INITIAL_VALUE)

  const handleChangePage = (value) => {
    setPage(value)
  }

  return (
    <div className={styles.reset}>
      <main className={styles.container}>
        <h1 className={styles.header}>Pokédex</h1>
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
      </main>
    </div>
  )
}
