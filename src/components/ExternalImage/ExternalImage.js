import React, { useState } from "react";
import Loader from "../Loader/Loader";

export default function ExternalImage({ src, alt }) {
  const [loadingImg, setLoadingImg] = useState(true);

  const onLoadImage = () => {
    setLoadingImg(false);
  };

  return (
    <>
      <img src={src} onLoad={onLoadImage} alt={alt} />
      {loadingImg && <Loader />}
    </>
  );
}
