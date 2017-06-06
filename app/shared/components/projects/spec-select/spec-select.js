import React from 'react';
import { Link } from 'react-router-dom';
import EmptyList from 'shared/components/empty-list';
import styles from './spec-select.scss'

const SpecSelect = ({ specs = [], project }) => (
  specs.length === 0
    ? <EmptyList>There's nothing to review at the moment</EmptyList>
    : (
    <ul className={styles.list}>
      {
        specs
          .map(spec => (
            <li key={spec.title} className={styles.item}>
              <Link to={`/projects/${project}/${spec.title}`}>{spec.title}</Link>
            </li>
          ))
      }
    </ul>
  )
);

export default SpecSelect;
