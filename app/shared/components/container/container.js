import React from 'react';
import classNames from 'classnames';
import styles from './container.scss';

const Container = ({ className, children }) => (
  <div className={classNames(styles.container, className)}>
    {children}
  </div>
);

export default Container;