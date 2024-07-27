import React from 'react'
import styles from "./card.module.css"
import { MdOutlinePendingActions } from "react-icons/md";

const Card3 = () => {
  return (
    <div className={styles.container}>
      <MdOutlinePendingActions size={50} className={styles.icons} />
      <div className={styles.texts}>
        <span className={styles.title}>Pending Payment</span>
        <span className={styles.number}>12.275</span>
      </div>
    </div>
  );
}

export default Card3
