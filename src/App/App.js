import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import PokemonList from '../Pages/PokemonList/PokemonList'
import PokemonDetail from '../Pages/PokemonDetail/PokemonDetail'

export const App = () => {
  return (
    <div>
      <h1>Pokédex</h1>
      <Router>
        <Switch>
          <Route exact path='/'>
            <PokemonList />
          </Route>
          <Route path='/detail'>
            <PokemonDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
