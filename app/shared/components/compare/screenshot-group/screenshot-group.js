import React from 'react';
import { Screenshot, DiffedScreenshot } from 'shared/components/compare';
import styles from './screenshot-group.scss';

const ScreenshotGroup = ({ baselineSrc, diffSrc, challengerSrc }) => (
  <div className={styles.container}>
    <div className={styles.screenshotWrapper}>
      <Screenshot src={baselineSrc} />
    </div>
    <div className={styles.screenshotWrapper}>
      <DiffedScreenshot diffSrc={diffSrc} challengerSrc={challengerSrc} />
    </div>
  </div>
);

export default ScreenshotGroup;