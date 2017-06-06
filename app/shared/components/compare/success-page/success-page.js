import React from 'react';
import { Link } from 'react-router-dom';
import ISvg from 'react-inlinesvg';
import { Button } from 'self-service-components';
import tickSvg from 'zd-svg-icons/src/14-checkmark-fill.svg'
import styles from './success-page.scss';

const SuccessPage = ({ match: { params: { project, type } } }) => (
  <div className={styles.success}>
    <ISvg src={tickSvg} className={styles.tick} />
    <h2>Success!</h2>
    <h3>{type === 'archive' ? 'Your results have been archived.' : 'You have updated the baseline.'}</h3>
    <Link to={`/projects/${project}`}>
      <Button className={styles.button}>
        Back to {project}
      </Button>
    </Link>
  </div>
);

export default SuccessPage;