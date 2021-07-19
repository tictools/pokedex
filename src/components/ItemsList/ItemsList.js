import React from 'react'
import styles from './ItemsList.css'

export default function ItemsList ({ children }) {
  return (
    <div className={styles.container}>
      { children.length ? <ul className={styles.grid__list}>{children}</ul> : <div className={styles['list--empty']}>No values</div>}
    </div>
  )
}
