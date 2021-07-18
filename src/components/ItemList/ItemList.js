import React from 'react'
import { Link } from 'react-router-dom'

export default function ItemList ({ id, name }) {
  return (
    <li>
      <Link to={`/detail/${id}`}>{name}</Link>
    </li>
  )
}
