import React from 'react';
import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <span>😕</span>
      <br />
      <h1>Ничего не найдено</h1>
      <p className={styles.description}>К сожалению эта страница отсутствует в нашем магазине</p>
    </div>
  );
};
