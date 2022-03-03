import React from "react";

import styles from './Header.module.css'



const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>Старые &mdash; Новые названия улиц Алматы</h1>
    </header>
  );
};

export default Header;
