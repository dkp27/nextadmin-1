import React from 'react'
import styles from "./card.module.css"
import { MdPrint } from 'react-icons/md';

const Card1 = () => {
  return (
    <div className={styles.container}>
      <MdPrint size={50} className={styles.icons} />
      <div className={styles.texts}>
        <span className={styles.title}>Invices</span>
        <span className={styles.number}>12.275</span>
      </div>
    </div>
  );
}

export default Card1
