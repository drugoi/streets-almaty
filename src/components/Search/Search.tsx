import React, { useState, useMemo, useEffect } from 'react';
import clsx from 'clsx';
import { SearchList } from '../SearchList/SearchList';
import styles from './Search.module.css';

// Выносим интерфейс улицы, чтобы использовать его в стейте
interface Street {
  old: string;
  new: string;
}

export const Search = () => {
  const [searchString, setSearchValue] = useState('');
  const [streets, setStreets] = useState<Street[]>([]); // Состояние для данных
  const [isLoading, setIsLoading] = useState(true);

  // Загружаем данные один раз при монтировании компонента
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/streets.json`)
      .then(response => response.json())
      .then(data => {
        setStreets(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Ошибка при загрузке списка улиц:", error);
        setIsLoading(false);
      });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const streetsList = useMemo(() => {
    const cleanedSearchString = searchString.trim().toLowerCase();

    if (cleanedSearchString.length === 0) {
      return streets;
    }

    // Небольшое улучшение: используем .includes() вместо .match()
    // .match() интерпретирует спецсимволы как регулярные выражения и может вызвать ошибку, если пользователь введет, например, "(" или "*"
    return streets.filter(
      street =>
        street.old.toLowerCase().includes(cleanedSearchString) ||
        street.new.toLowerCase().includes(cleanedSearchString)
    );
  }, [searchString, streets]);

  if (isLoading) {
    return <div style={{ textAlign: 'center', padding: '2rem' }}>Загрузка списка улиц...</div>;
  }

  return (
    <main className={styles.search}>
      <form className={styles.searchForm}>
        <input
          className={clsx(styles.searchInput, {
            [styles._has_error]: !streetsList.length && searchString.length > 0
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