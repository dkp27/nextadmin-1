import React from 'react'
import styles from "../ui/dashboard/dashboard.module.css"
import Chart from '../ui/dashboard/chart/chart';
import Card1 from '../ui/dashboard/card/card1/card';
import Card2 from '../ui/dashboard/card/card2/card';
import Card3 from '../ui/dashboard/card/card3/card';
import Card4 from '../ui/dashboard/card/card4/card';
import Card5 from '../ui/dashboard/card/card5/card';
import Card6 from '../ui/dashboard/card/card6/card';

const dashboard = () => {
  return (
    <div className={styles.wrapper}>
    <div className={styles.main}>
      <div className={styles.cards}>
        <Card1/>
        <Card2/>
        <Card3/>
        <Card4/>
        <Card5/>
        <Card6/>
      </div>
      <Chart />
    </div>
  </div>
  );
}

export default dashboard
