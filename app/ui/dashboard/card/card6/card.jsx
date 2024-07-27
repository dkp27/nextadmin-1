import React from 'react'
import styles from "./card.module.css"
import { MdPayments } from "react-icons/md";

const Card6 = () => {
  return (
    <div className={styles.container}>
      <MdPayments size={50} className={styles.icons} />
      <div className={styles.texts}>
        <span className={styles.title}>Pending Purchase value</span>
        <span className={styles.number}>12.275</span>
      </div>
    </div>
  );
}

export default Card6
