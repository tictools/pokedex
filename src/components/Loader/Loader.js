import React from 'react'
import styles from './Loader.css'

export default function Loader ({ label = '' }) {
  return (
    <div className={styles.loader__container}>
      <div className={styles.loader__spinner}></div>
      <p className={styles.loader__label}>Loading {label}...</p>
    </div>
  )
}
