import React from 'react'
import styles from './Button.css'

export default function Button ({ label, handleClick, status }) {
  const buttonClassName = status
    ? styles.button__pagination
    : styles['button__pagination--disabled']

  return (
    <button className={buttonClassName} onClick={handleClick}>
      {label}
    </button>
  )
}
