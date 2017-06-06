import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectsList from 'shared/components/projects/projects-list';
import Container from 'shared/components/container';
import { fetchProjects } from 'shared/actions/project';
import {projectSelectors, fetchSelectors} from 'shared/selectors';
import * as refs from 'shared/constants/refs';
import ConnectionStatus from 'shared/components/api/connection-status';
import styles from './projects-page.scss';

class ProjectsPage extends Component {

  componentWillMount() {
    this.props.fetchProjects();
  }

  render() {
    return (
      <Container className={styles.container}>
        <h1 className={styles.title}>Projects</h1>
        <ConnectionStatus status={this.props.status}>
          <ProjectsList projects={this.props.projects} />
        </ConnectionStatus>
      </Container>
    );
  }
}

export default connect(
  state => ({
    projects: projectSelectors.getAll(state),
    status: fetchSelectors.getStatus(state, refs.FETCH_PROJECTS)
  }),
  { fetchProjects }
)(ProjectsPage);