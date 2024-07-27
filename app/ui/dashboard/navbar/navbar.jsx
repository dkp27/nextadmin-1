"use client"

import { usePathname } from 'next/navigation'
import React from 'react'
import styles from "./navbar.module.css"
import { MdHome, MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md'


const Navbar = () => {

const pathname = usePathname();

  return (
    <div className={styles.container}>
      <MdHome className={styles.icons} size={30} />
      <div className={styles.title}>&nbsp;{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.fine}>
          <span>Financial Year</span>
          <a href="/dashboard/manageFinancialYears">
            <span>2013-2014</span>
          </a>
        </div>
        <div className={styles.search}>
          <MdSearch />
          <input type="text" placeholder="Search..." className={styles.input} />
        </div>
        <div className={styles.icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
}

export default Navbar
