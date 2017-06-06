import React from 'react';
import classNames from 'classnames';
import ScreenshotGroup from './../screenshot-group';
import CompareControlGroup from './../compare-control-group';
import { Button } from 'self-service-components';
import ISvg from 'react-inlinesvg';
import undoSvg from 'zd-svg-icons/src/14-refresh.svg'
import { STEP_STATUS } from 'shared/constants';
import styles from './compare-group.scss';

const CompareGroup = ({ step, status, onReject, onUndo, onAccept, shouldBindKeys }) => (
  <div
    className={classNames(
      styles.container,
      styles.card,
      {
        [styles.rejected]: status === STEP_STATUS.REJECTED,
        [styles.accepted]: status === STEP_STATUS.ACCEPTED
      }
    )}
  >
    <div className={styles.title}>{step.title}</div>
    {
      status !== STEP_STATUS.TO_REVIEW && (
        <div className={styles.buttonWrapper}>
          <Button onClick={onUndo} className={styles.undoButton}>
            <div>Undo</div>
            <div className={styles.icon}>
              <ISvg src={undoSvg} />
            </div>
          </Button>
        </div>
      )
    }
    {
      status === STEP_STATUS.TO_REVIEW && (
        <div>
          <ScreenshotGroup
            baselineSrc={step.baseline}
            diffSrc={step.diff}
            challengerSrc={step.challenger}
          />
          <div className={styles.controlGroup}>
            <CompareControlGroup
              onReject={onReject}
              onAccept={onAccept}
              shouldBindKeys={shouldBindKeys}
            />
          </div>
        </div>
      )
    }
  </div>
);

export default CompareGroup;