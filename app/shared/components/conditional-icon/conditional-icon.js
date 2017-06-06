import React from 'react';
import FontAwesome from 'react-fontawesome';

const ConditionalIcon = ({ icon, fallback }) => (
  true
    ? <FontAwesome name={'rocket'} size='2x' />
    : <span>{fallback}</span>
);

export default ConditionalIcon;