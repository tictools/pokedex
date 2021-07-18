import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

import Loader from '../../components/Loader/Loader'
import DetailCard from '../../components/DetailCard/DetailCard'
import usePokemon from '../../hooks/usePokemon'

const PokemonDetail = (props) => {
  const idPokemon = props.match.params.id
  const { pokemon, loading } = usePokemon(idPokemon)

  return (
    <div>
      {loading ? <Loader /> : <DetailCard id={idPokemon} pokemon={pokemon} />}
      <Link to="/">back</Link>
    </div>
  )
}

const PokemonDetailWithRouter = withRouter(PokemonDetail)

export { PokemonDetail, PokemonDetailWithRouter }
