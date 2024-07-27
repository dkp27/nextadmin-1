"use client"
import React from 'react'
import styles from "./chart.module.css"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sun",
    invoice: 0,
    pending: 0,
    purchase: 0,
  },
  {
    name: "Mon",
    invoice: 3000,
    pending: 7000,
    purchase: 2000,
  },
  {
    name: "Tue",
    invoice: 6000,
    pending: 5000,
    purchase: 2000,
  },
  {
    name: "Wed",
    invoice: 8000,
    pending: 2400,
    purchase: 2000,
  },
  {
    name: "Thus",
    invoice: 3000,
    pending: 2000,
    purchase: 2000,
  },
  {
    name: "Fri",
    invoice: 5000,
    pending: 3000,
    purchase: 2000,
  },
  {
    name: "Sat",
    invoice: 1000,
    pending: 4000,
    purchase: 2000,
  },
  
];
 
const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Recap</h2>
      <ResponsiveContainer width="100%" height="90%" className={styles.ab}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="invoice"
            stroke="SlateBlue"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="pending" stroke="yellow" />
          <Line type="monotone" dataKey="purchase" stroke="lime" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart
