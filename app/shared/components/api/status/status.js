import React from 'react';
import { NOT_LOADED, LOADED, PENDING, FAILED } from 'alexs-redux-fetch/fetch/constants';

const Status = ({ status, notLoaded, loaded, pending, failed }) => {
  switch (status) {
    case NOT_LOADED:
      return notLoaded;
    case LOADED:
      return loaded;
    case PENDING:
      return pending;
    case FAILED:
    default:
      return failed;
  }
}

export default Status;