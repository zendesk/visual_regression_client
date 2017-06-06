import React from 'react';
import classNames from 'classnames';
import CompareActionButton from './../compare-action-button';
import yeahSvg from 'zd-svg-icons/src/14-checkmark-fill.svg'
import nahSvg from 'zd-svg-icons/src/14-times-fill.svg'
import { STEP_STATUS } from 'shared/constants';
import styles from './compare-control-group.scss';

const CompareControlGroup = ({ onAccept, onReject, status, shouldBindKeys }) => (
  <div
    className={classNames(
      styles.container,
      {
        [styles.rejected]: status === STEP_STATUS.REJECTED,
        [styles.accepted]: status === STEP_STATUS.ACCEPTED
      }
    )}
  >
    <div className={styles.buttonWrapper}>
      <CompareActionButton
        title={'Accept'}
        iconSrc={yeahSvg}
        shortcutKey={'z'}
        onClick={onAccept}
        className={styles.acceptButton}
        shouldBindKeys={shouldBindKeys}
      />
    </div>
    <div className={styles.buttonWrapper}>
      <CompareActionButton
        title={'Reject'}
        iconSrc={nahSvg}
        shortcutKey={'c'}
        onClick={onReject}
        className={styles.rejectButton}
        shouldBindKeys={shouldBindKeys}
      />
    </div>
  </div>
);

export default CompareControlGroup;