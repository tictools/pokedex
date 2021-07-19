import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

import Loader from '../../components/Loader/Loader'
import DetailCard from '../../components/DetailCard/DetailCard'
import usePokemon from '../../hooks/usePokemon'

import styles from './PokemonDetail.css'

const PokemonDetail = (props) => {
  const idPokemon = props.match.params.id
  const { pokemon, loading } = usePokemon(idPokemon)

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
      {loading ? <Loader /> : <DetailCard id={idPokemon} pokemon={pokemon} />}
      </div>
      <Link className={styles.back__link} to="/">back</Link>
    </div>
  )
}

const PokemonDetailWithRouter = withRouter(PokemonDetail)

export { PokemonDetail, PokemonDetailWithRouter }
