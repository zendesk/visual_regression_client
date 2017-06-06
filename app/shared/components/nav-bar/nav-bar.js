import React from 'react';
import { Link } from 'react-router-dom';
import styles from './nav-bar.scss';

const NavBar = ({ title }) => (
  <div className={styles.container}>
    <div className={styles.heading}>
      <Link to='/'>Reveal</Link>
    </div>
  </div>
);

export default NavBar;