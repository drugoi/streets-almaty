import React, { FC } from "react";

import clsx from "clsx";

import styles from './SearchList.module.css'

interface Street {
  old: string
  new: string
}

interface IProps {
  streetsList: Street[];
}

const SearchList: FC<IProps> = (props) => {
  const { streetsList } = props;

  return (
    <>
      <div className={clsx(styles.searchRow, styles.searchRowHeader)}>
        <span className={clsx(styles.searchRowItem, styles.searchRowItemHeader)}>Старое название</span>
        <span className={clsx(styles.searchRowItem, styles.searchRowItemHeader)}>Новое название</span>
      </div>
      {streetsList.map((street, index: number) => (
        <div className={clsx(styles.searchRow)} key={index}>
          <span className={styles.searchRowItem}>{street.old}</span>
          <span className={styles.searchRowItem}>{street.new}</span>
        </div>
      ))}
    </>
  );
};

export default SearchList;
