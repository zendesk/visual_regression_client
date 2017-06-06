import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import { authSelectors } from 'shared/selectors';
import { ProjectPage, ProjectsPage, BrowserSelectPage } from 'shared/components/projects';
import { ComparePage, SuccessPage } from 'shared/components/compare';
import NavBar from 'shared/components/nav-bar';
import styles from './user-app.scss'

const UserApp = ({ name }) => (
  <div>
    <NavBar />
    <Switch>
      <Route path="/projects/:project/:spec/:browser/compare" component={ComparePage} />
      <Route path="/projects/:project/success/:type" component={SuccessPage} />
      <Route path="/projects/:project/:spec" component={BrowserSelectPage} />
      <Route path="/projects/:project" component={ProjectPage} />
      <Route path="/" component={ProjectsPage} />
    </Switch>
  </div>
);

export default withRouter(connect(
  state => {
    return {};
  }
)(UserApp));