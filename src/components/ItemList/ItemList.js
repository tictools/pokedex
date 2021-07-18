import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ItemList.css'

export default function ItemList ({ id, name }) {
  return (
    <li className={styles.list__item}>
      <Link className={styles.list__link} to={`/detail/${id}`}>{name}</Link>
    </li>
  )
}
