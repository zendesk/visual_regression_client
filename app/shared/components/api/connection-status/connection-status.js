import React from 'react';
import Status from 'shared/components/api/status';

const ConnectionStatus = ({ status, children }) => (
  <Status
    status={status}
    notLoaded={<div>Not loaded</div>}
    pending={<div>Loading...</div>}
    failed={<div>Fetch Failed</div>}
    loaded={React.Children.only(children)}
  />
);

export default ConnectionStatus;