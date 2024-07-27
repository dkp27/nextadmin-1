import React from 'react'
import styles from "./card.module.css"
import { MdCurrencyRupee } from "react-icons/md";

const Card4 = () => {
  return (
    <div className={styles.container}>
      <MdCurrencyRupee size={50} className={styles.icons} />
      <div className={styles.texts}>
        <span className={styles.title}>Purchase Invoice</span>
        <span className={styles.number}>12.275</span>
      </div>
    </div>
  );
}

export default Card4
