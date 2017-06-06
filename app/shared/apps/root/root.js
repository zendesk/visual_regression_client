import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { asyncComponent } from 'shared/components/async';
import { getIsLoggedIn } from 'shared/selectors/auth';
import GuestApp from 'shared/apps/guest-app';
import UserApp from 'shared/apps/user-app';

const Root = ({ isLoggedIn }) =>
  (isLoggedIn || true)
    ? <UserApp />
    : <GuestApp />

export default withRouter(connect(
  state => ({
    isLoggedIn: getIsLoggedIn(state)
  })
)(Root));