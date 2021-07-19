import React from 'react'
import ExternalImage from '../ExternalImage/ExternalImage'
import ItemsList from '../ItemsList/ItemsList'

import styles from './DetailCard.css'

export default function DetailCard ({ id, pokemon }) {
  const getTypes = () =>
    pokemon &&
    pokemon.types &&
    pokemon.types.map((type) => <li key={type.slot}>{type.type.name}</li>)

  const types = getTypes()

  return (
    <div className={styles.detail__wrapper}>
      <h2 className={styles.detail__header}>{pokemon.name}</h2>
      <div className={styles.detail__container}>
        <div className={styles.detail__image}>
          <ExternalImage
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
          />
        </div>
        <div className={styles.detail__info}>
          <p>ID: {id}</p>
          <p>Number of moves: {pokemon.moves.length}</p>
          <div>Types: {<ItemsList>{types}</ItemsList>}</div>
        </div>
      </div>
    </div>
  )
}
