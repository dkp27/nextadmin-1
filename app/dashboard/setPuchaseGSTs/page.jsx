import React from 'react'
import styles from "./setPuchaseGSTs.module.css"

const SetPuchaseGSTs = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <div>
          <label className={styles.label}>Transportation GST %</label>
          <input
            maxLength={2}
            type="text"
            name="pur_trans_gst_per"
            id="pur_trans_gst_per"
            defaultValue="18"
          />
        </div>
        <div>
          <label className={styles.label}>Insurance GST %</label>
          <input
            maxLength={2}
            type="text"
            name="pur_insur_gst_per"
            id="pur_insur_gst_per"
            defaultValue="18"
          />
        </div>
        <button>Update</button>
      </form>
    </div>
  );
}

export default SetPuchaseGSTs
