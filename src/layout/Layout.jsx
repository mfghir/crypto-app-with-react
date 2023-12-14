/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>
          <a href="">fatemeweb</a> | React proj
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>developed by mr :)</p>
      </footer>
    </>
  );
};

export default Layout;
