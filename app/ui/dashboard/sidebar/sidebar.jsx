import React, { useEffect, useState } from "react";
import styles from "./sidebar.module.css";
import {
  MdAnalytics,
  MdArrowDownward,
  MdArrowUpward,
  MdAttachMoney,
  MdDashboard,
  MdHelpCenter,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdLogout,
  MdOutlineSettings,
  MdPeople,
  MdShoppingBag,
  MdSupervisedUserCircle,
  MdWork,
} from "react-icons/md";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";

const menuItems = [
  {
    title: "DashBoard",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
    ],
  },
  {
    title: "Set Up",
    list: [
      {
        title: "Manage Financial Year",
        path: "/dashboard/manageFinancialYears",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Company Setup",
        path: "/dashboard/companySetups",
        icon: <MdShoppingBag />,
      },
      {
        title: "Set Purchase GST %",
        path: "/dashboard/setPuchaseGSTs",
        icon: <MdAttachMoney />,
      },
      {
        title: "Openning Stock Entry",
        path: "/dashboard/OpenningStockEntrys",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Masters",
    list: [
      {
        title: "Sales Man",
        path: "/dashboard/salesMans",
        icon: <MdWork />,
      },
      {
        title: "Customer Master",
        path: "/dashboard/customerMasters",
        icon: <MdAnalytics />,
      },
      {
        title: "Supplier Master",
        path: "/dashboard/supplierMasters",
        icon: <MdAnalytics />,
      },
      {
        title: "Item Master",
        path: "/dashboard/itemMasters",
        icon: <MdAnalytics />,
      },
    ],
  },
  {
    title: "Transactions",
    list: [
      {
        title: "Purchase Product",
        path: "/dashboard/purchageProducts",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Purchage List",
        path: "/dashboard/purchaseLists",
        icon: <MdHelpCenter />,
      },
      {
        title: "Sales Invice",
        path: "/dashboard/salesInvices",
        icon: <MdHelpCenter />,
      },
      {
        title: "Sales Invice List",
        path: "/dashboard/salesInviceLists",
        icon: <MdHelpCenter />,
      },
      {
        title: "Stock Reports",
        path: "/dashboard/stockRepords",
        icon: <MdHelpCenter />,
      },
    ],
  },
  {
    title: "Reports",
    list: [
      {
        title: "Daily Sales Summary",
        path: "/dashboard/dailySalesSummarys",
        icon: <MdOutlineSettings />,
      },
      {
        title: "GST Tax % Wise Sales",
        path: "/dashboard/gstTaxWiseSales",
        icon: <MdHelpCenter />,
      },
      {
        title: "Daily Purchase Summary",
        path: "/dashboard/dailyPurchaseSummarys",
        icon: <MdHelpCenter />,
      },
      {
        title: "GST Tax % Wise Purchase",
        path: "/dashboard/gstTaxWisePurchases",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  const [collapsedCategories, setCollapsedCategories] = useState([]);

  const toggleCategory = (title) => {
    if (collapsedCategories.includes(title)) {  
      setCollapsedCategories(
        collapsedCategories.filter((item) => item !== title)
      );
    } else {
      setCollapsedCategories([...collapsedCategories, title]);
    }
  };

  useEffect(() => {
    setCollapsedCategories(menuItems.map((cat) => cat.title));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src="/noavatar.png"
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>daku</span>
          <span className={styles.userTitle}>Engineer</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <div
              className={styles.cat}
              onClick={() => toggleCategory(cat.title)}>
              <span>{cat.title}</span>
              {collapsedCategories.includes(cat.title) ? (
                <MdKeyboardArrowDown className={styles.down} />
              ) : (
                <MdKeyboardArrowUp className={styles.down} />
              )}
            </div>
            {!collapsedCategories.includes(cat.title) && (
              <ul>
                {cat.list.map((item) => (
                  <MenuLink item={item} key={item.title} />
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <form>
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
