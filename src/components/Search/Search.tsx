import React, { useState, useMemo } from 'react';

import clsx from 'clsx';

import streets from '../../streets.json';
import { SearchList } from '../SearchList/SearchList';

import styles from './Search.module.css';

export const Search = () => {
  const [searchString, setSearchValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const streetsList = useMemo(() => {
    const cleanedSearchString = searchString.trim().toLowerCase();

    if (cleanedSearchString.length === 0) {
      return streets;
    }

    return streets.filter(
      street =>
        street.old.toLowerCase().match(cleanedSearchString) ||
        street.new.toLowerCase().match(cleanedSearchString)
    );
  }, [searchString]);

  return (
    <main className={styles.search}>
      <form className={styles.searchForm}>
        <input
          className={clsx(styles.searchInput, {
            [styles._has_error]: !streetsList.length
          })}
          value={searchString}
          onChange={handleChange}
          type="text"
          placeholder="Введите старое или новое название улицы"
          autoFocus
        />
      </form>
      <SearchList streetsList={streetsList} />
    </main>
  );
};
