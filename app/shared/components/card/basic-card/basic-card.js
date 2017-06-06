import React from 'react';
import { View } from 'zd-react-components';
import classNames from 'classnames';
import styles from './basic-card.css';

const BasicCard = ({ heading, className, children }) => (
  <View className={classNames(styles.card, className)}>
    {children}
  </View>
);

export default BasicCard;