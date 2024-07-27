import React from 'react'
import styles from "./card.module.css"
import { MdCurrencyRupee } from "react-icons/md";

const Card5 = () => {
  return (
    <div className={styles.container}>
      <MdCurrencyRupee size={50} className={styles.icons} />
      <div className={styles.texts}>
        <span className={styles.title}>Purchase Value</span>
        <span className={styles.number}>12.275</span>
      </div>
    </div>
  );
}

export default Card5
