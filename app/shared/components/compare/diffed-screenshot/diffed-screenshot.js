import React from 'react';
import { View } from 'self-service-components';
import Screenshot from 'shared/components/compare/screenshot';
import styles from './diffed-screenshot.scss';

const DiffedScreenshot = ({ diffSrc, challengerSrc }) => (
  <View className={styles.container}>
    <Screenshot src={diffSrc} />
    <View className={styles.diffContainer}>
      <Screenshot src={challengerSrc} />
    </View>
  </View>
);

export default DiffedScreenshot;