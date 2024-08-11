import React, { FC } from "react";
import styles from "./hero.module.sass";
import { MdMenu } from "react-icons/md";

export const Hero: FC<{ onOpenSideBar?: () => void }> = ({ onOpenSideBar }) => {
  return (
    <>
      <nav className={styles.nav} id="navbar">
        <button onClick={onOpenSideBar}>
          <MdMenu /> Anslem Okeke
        </button>
      </nav>
      <div className={styles.root}>
        <div className={styles.container}>
          <h1 className={styles.title}>Anslem Okeke</h1>
        </div>
        <div className={styles.overlay} />
      </div>
    </>
  );
};
