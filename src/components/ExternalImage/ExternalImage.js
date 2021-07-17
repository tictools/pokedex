import React, { useState } from "react";

export default function ExternalImage({ src, alt }) {
  const [loadingImg, setLoadingImg] = useState(true);

  const onLoadImage = () => {
    setLoadingImg(false);
  };

  return (
    <>
      <img src={src} onLoad={onLoadImage} alt={alt} />
      {loadingImg && <p>LOADING IMAGE!!!</p>}
    </>
  );
}
