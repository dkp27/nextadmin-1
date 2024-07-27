import React from 'react'
import styles from "./manageFinancialYears.module.css"



const ManageFinancialYears = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.header}>Create New Financial Year</h1>
        <form action="" className={styles.form}>
          <div className={styles.underline}></div>
          <label>Enter New Financial Year</label>
          <input
            type="text"
            placeholder="Financial Year Ex: 2013-2014"
            name="financialYear"
          />
          <button>Save</button>
        </form>
      </div>
      <div>
        <h1 className={styles.header}>Manage Financial Year</h1>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Sr No</td>
              <td>Financial Year</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            <tr>
              <td>1</td>
              <td>2023-2024</td>
              <td>
                <span className={`${styles.status} ${styles.pending}`}>
                  Pending
                </span>
              </td>
              <td>
                <button>Set Current Financial Year</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>2020-2021</td>
              <td>
                <span className={`${styles.status} ${styles.active}`}>
                  Active
                </span>
              </td>
              <td>
                <button>Set Current Financial Year</button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>2022-20223</td>
              <td>
                <span className={`${styles.status} ${styles.pending}`}>
                  Pending
                </span>
              </td>
              <td>
                <button>Set Current Financial Year</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageFinancialYears
