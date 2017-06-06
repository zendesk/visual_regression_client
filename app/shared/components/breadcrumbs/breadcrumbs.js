import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ previous = [], children }) => (
  <div>
    {
      previous.map(({ url, title }, index) => (
        <span key={`${index}-${title}`}>
           {index > 0 && ` > `}
          <Link to={url}>{title}</Link>
        </span>
      ))
    }
    {
      previous.length && ` > `
    }
    {children}
  </div>
);

export default Breadcrumbs;