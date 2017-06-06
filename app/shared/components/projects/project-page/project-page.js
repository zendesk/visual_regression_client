import React, { Component } from 'react';
import { connect } from 'react-redux';
import SpecSelect from './../spec-select';
import Breadcrumbs from 'shared/components/breadcrumbs';
import { fetchProject } from 'shared/actions/project';
import { fetchSelectors, projectSelectors } from 'shared/selectors';
import * as refs from 'shared/constants/refs';
import ConnectionStatus from 'shared/components/api/connection-status';
import Container from 'shared/components/container';
import styles from './project-page.scss';

class ProjectPage extends Component {
  componentWillMount() {
    this.props.fetchProject(this.props.match.params.project);
  }

  render() {
    return (
      <Container className={styles.container}>
        <h1 className={styles.title}>
          <Breadcrumbs previous={[{ url: '/', title: 'Projects' }]}>
            {this.props.match.params.project}
          </Breadcrumbs>
        </h1>
        <ConnectionStatus status={this.props.projectStatus}>
          <SpecSelect
            project={this.props.match.params.project}
            specs={Object.values(this.props.project.specs || {})}
          />
        </ConnectionStatus>
      </Container>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    project: projectSelectors.getById(state, ownProps.match.params.project),
    projectStatus: fetchSelectors.getStatus(state, refs.fetchProject(ownProps.match.params.project))
  }),
  { fetchProject }
)(ProjectPage);