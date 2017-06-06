import React from 'react';
import styles from './screenshot.scss';

const Screenshot = ({ src }) => (
  <div className={styles.imageWrapper}>
    <img className={styles.image} src={src} />
  </div>
);

export default Screenshot;