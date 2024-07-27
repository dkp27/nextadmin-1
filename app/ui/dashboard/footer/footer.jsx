import React from 'react'
import styles from "./foorter.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Billzilla</div>
      <div className={styles.text}>© All Rights Reserved.</div>
    </div>
  );
}

export default Footer
