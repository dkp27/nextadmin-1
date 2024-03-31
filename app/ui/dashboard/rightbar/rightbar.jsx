import React from "react";
import styles from "./rightbar.module.css";
import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const RightBar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.bgContainer}>
            <Image src="/astronaut.png" alt="" fill className={styles.bg} />
          </div>
          <div className={styles.text}>
            <span className={styles.notification}>🔥 Availavle Now</span>
            <h3 className={styles.title}>
              How to use the new version of the admin dashboard?
            </h3>
            <span className={styles.subtitle}>Takes 4 minutes to learn</span>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
              voluptatibus fugiat unde quidem iure sit mollitia animi dolorem
              enim, eius maiores nemo, facere quasi quia optio odio qui. Autem,
              corrupti.
            </p>
            <button className={styles.button}>
              <MdPlayCircleFilled />
              Watch
            </button>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.text}>
            <span className={styles.notification}>🔥 coming soon</span>
            <h3 className={styles.title}>
              How to use the new version of the admin dashboard?
            </h3>
            <span className={styles.subtitle}>Takes 4 minutes to learn</span>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
              voluptatibus fugiat unde quidem iure sit mollitia animi dolorem
              enim, eius maiores nemo, facere quasi quia optio odio qui. Autem,
              corrupti.
            </p>
            <button className={styles.button}>
              <MdReadMore />
              Learn
            </button>
          </div>
        </div>
      </div>
  );
};

export default RightBar;
