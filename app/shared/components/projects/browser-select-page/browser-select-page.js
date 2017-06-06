import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProject } from 'shared/actions/project';
import { fetchSelectors, projectSelectors } from 'shared/selectors';
import * as refs from 'shared/constants/refs';
import ConnectionStatus from 'shared/components/api/connection-status';
import BrowserSelect from './../browser-select';
import Breadcrumbs from 'shared/components/breadcrumbs';
import Container from 'shared/components/container';
import styles from './browser-select-page.scss';

class BrowserSelectPage extends Component {
  componentWillMount() {
    this.props.fetchProject(this.props.match.params.project);
  }

  render() {
    return (
      <div>
        <Container className={styles.container}>
          <h1 className={styles.title}>
            <Breadcrumbs
              previous={[
                { url: '/', title: 'Projects' },
                { url: `/projects/${this.props.match.params.project}`, title: this.props.match.params.project },
              ]}
            >
              {this.props.match.params.spec}
            </Breadcrumbs>
          </h1>
          <ConnectionStatus status={this.props.projectStatus}>
            <BrowserSelect
              baseUrl={this.props.match.url}
              browsers={this.props.browsers}
            />
          </ConnectionStatus>
        </Container>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    project: projectSelectors.getById(state, ownProps.match.params.project),
    projectStatus: fetchSelectors.getStatus(state, refs.fetchProject(ownProps.match.params.project)),
    browsers: projectSelectors.getBrowsers(state, ownProps.match.params.project, ownProps.match.params.spec)
  }),
  { fetchProject }
)(BrowserSelectPage);