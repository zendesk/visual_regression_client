import React from 'react';
import styles from './empty-list.scss';

const EmptyList = ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
);

export default EmptyList;