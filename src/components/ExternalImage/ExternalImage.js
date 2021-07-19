import React, { useState } from 'react'
import Loader from '../Loader/Loader'

import styles from './ExternalImage.css'

export default function ExternalImage ({ src, alt }) {
  const [loadingImg, setLoadingImg] = useState(true)

  const onLoadImage = () => {
    setLoadingImg(false)
  }

  return (
    <>
      <img className={styles.image}src={src} onLoad={onLoadImage} alt={alt} />
      {loadingImg && <Loader label='image'/>}
    </>
  )
}
