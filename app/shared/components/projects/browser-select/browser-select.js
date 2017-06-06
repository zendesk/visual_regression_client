import React from 'react';
import { Link } from 'react-router-dom';
import EmptyList from 'shared/components/empty-list';
import { getOSIcon } from 'shared/constants/icons';
import styles from './browser-select.scss';

const BrowserSelect = ({ browsers = [], baseUrl }) => (
  browsers.length === 0
    ? <EmptyList>There's nothing to review at the moment</EmptyList>
    : (
    <ul className={styles.list}>
      {
        browsers
          .map(browser => (
            <li key={browser.id} className={styles.item}>
              <Link to={`${baseUrl}/${browser.id}/compare`} className={styles.link}>
                {`${browser.os} ${browser.browser} (${browser.resolution.width}x${browser.resolution.height})`}
              </Link>
            </li>
          ))
      }
    </ul>
  )
);

export default BrowserSelect;
