import React from 'react'
import Button from '../Button/Button'
import styles from './ButtonBar.css'

export default function ButtonBar ({
  handlePrevious,
  handleNext,
  status,
  page
}) {
  return (
    <div className={styles.container}>
      <Button
        label="Previous"
        handleClick={handlePrevious}
        status={status.previous}
      />
      <p className={styles.counter}>{page + 1}</p>
      <Button label="Next" handleClick={handleNext} status={status.next} />
    </div>
  )
}
