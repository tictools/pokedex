import React from "react";
import styles from "./Loader.css";

export default function Loader() {
  return (
    <div className={styles.loader__container}>
      <div className={styles.loader__spinner}></div>
    </div>
  );
}
