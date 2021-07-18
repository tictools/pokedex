import React from 'react'
import styles from './FilterBar.css'

export default function FilterBar ({ handleFilter }) {
  const handleInputChange = (event) => handleFilter(event.target.value)

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="filter..."
        name="filter"
        onChange={handleInputChange}
      />
    </div>
  )
}
