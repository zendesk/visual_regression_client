import React from 'react';
import View from 'zd-react-components/lib/View';
import BasicCard from './../basic-card';
import styles from './form-card.css';

const FormCard = ({ heading, controls, children }) => (
  <BasicCard className={styles.card}>
    {(heading || controls) && (
      <View className={styles.heading}>
        <View>{heading}</View>
        <View>{controls}</View>
      </View>
    )}
    <View>
      {children}
    </View>
  </BasicCard>
);

export default FormCard;
