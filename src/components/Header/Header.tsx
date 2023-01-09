import React from 'react';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>
        Старые &mdash; Новые названия улиц Алматы
      </h1>
    </header>
  );
};
