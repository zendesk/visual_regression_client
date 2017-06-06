import React from 'react';
import AsyncComponent from './async-component';

const LoadingComponent = () => <div>Loading...</div>;
const FailedComponent = () => <div>Failed</div>;

export default (getComponent, loadingComponent, failedComponent) => (...props) => (
  <AsyncComponent
    getComponent={getComponent}
    loadingComponent={loadingComponent || LoadingComponent}
    failedComponent={failedComponent || FailedComponent}
    componentProps={props}
  />
);