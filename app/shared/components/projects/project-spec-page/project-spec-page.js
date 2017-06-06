import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjectSpec } from 'shared/actions/project';
import { fetchSelectors, projectSelectors } from 'shared/selectors';
import * as refs from 'shared/constants/refs';
import ConnectionStatus from 'shared/components/api/connection-status';

class ProjectPage extends Component {
  componentWillMount() {
    this.props.fetchProject(this.props.match.params.project);
  }

  render() {
    return (
      <div>
        <h1>
          Specs
        </h1>
        <ConnectionStatus status={this.props.projectStatus}>
          <SpecSelect
            project={this.props.match.params.project}
            specs={this.props.project.specs}
          />
        </ConnectionStatus>
      </div>
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