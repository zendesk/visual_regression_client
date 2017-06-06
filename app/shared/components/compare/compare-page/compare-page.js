import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import tickSvg from 'zd-svg-icons/src/14-checkmark-fill.svg'
import ISvg from 'react-inlinesvg';
import { LOADED } from 'alexs-redux-fetch/fetch/constants';
import { fetchCancel } from 'alexs-redux-fetch/fetch/actions';
import { Button } from 'self-service-components';
import { fetchProject, fetchSpecSteps, saveResults } from 'shared/actions/project';
import { compareSelectors, fetchSelectors } from 'shared/selectors';
import CompareGroup from './../compare-group';
import * as refs from 'shared/constants/refs';
import { getCompareId } from 'shared/constants/ids';
import { STEP_STATUS } from 'shared/constants';
import styles from './compare-page.scss';

class ComparePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: []
    }
  }

  componentWillReceiveProps(props) {
    if (props.compare && props.compare.steps && props.compare.id !== this.props.compare.id) {
      console.log(props.compare, this.props.compare)
      this.setState({ steps: props.compare.steps.map(() => STEP_STATUS.TO_REVIEW) });
    }
  }

  componentWillMount() {
    this.mounting = true;
    this.props.fetchCancel(refs.saveResults(this.props.projectId, this.props.specId, this.props.browserId));
    this.props.fetchProject(this.props.projectId);
    this.props.fetchSpecSteps(this.props.projectId, this.props.specId, this.props.browserId);
  }

  componentDidMount() {
    this.mounting = false;
  }

  updateStep(index, status) {
    this.setState({
      steps: this.state.steps.map((s, i) => index === i ? status : s)
    })
  }

  render() {
    const remaining = this.state.steps.reduce((total, step) => {
      if (step === STEP_STATUS.TO_REVIEW) return total + 1;
      return total
    }, 0);

    const archive = this.state.steps.reduce((archive, step) => {
      if (archive) return archive;
      return step === STEP_STATUS.REJECTED
    }, false);

    if (this.props.savedResults && !this.mounting) {
      return <Redirect to={`/projects/${this.props.projectId}/success/${archive ? 'archive' : 'baseline'}`} />
    }

    return (
      <div>
        {
          (this.props.compare && this.props.compare.steps || []).map((step, index) => (
            <CompareGroup
              step={step}
              status={this.state.steps[index] || STEP_STATUS.TO_REVIEW}
              onReject={() => this.updateStep(index, STEP_STATUS.REJECTED)}
              onAccept={() => this.updateStep(index, STEP_STATUS.ACCEPTED)}
              onUndo={() => this.updateStep(index, STEP_STATUS.TO_REVIEW)}
            />
          ))
        }
        <div className={styles.controls}>
          <div>
            {remaining > 0 && <p className={styles.remainingMessage}>You still have {remaining} left to review</p>}
            <div className={styles.controlButtons}>
              <Link to={`/projects/${this.props.projectId}`}>Cancel</Link>
              <Button disabled={remaining > 0} className={styles.saveButton} onClick={() => this.props.saveResults(
                this.props.projectId,
                this.props.specId,
                this.props.browserId,
                this.props.compare.steps.map((step, index) => ({ ...step, decision: this.state.steps[index] }))
              )}>Save</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default connect(
  (state, ownProps) => {
    const projectId = ownProps.match.params.project;
    const specId = ownProps.match.params.spec;
    const browserId = ownProps.match.params.browser;
    const compareId = getCompareId(projectId, specId, browserId);

    return {
      projectId,
      specId,
      browserId,
      compare: compareSelectors.getById(state, compareId),
      projectStatus: fetchSelectors.getStatus(state, refs.fetchProject(projectId)),
      stepsStatus: fetchSelectors.getStatus(state, refs.fetchSpecSteps(projectId, specId, browserId)),
      savedResults: fetchSelectors.getStatus(state, refs.saveResults(projectId, specId, browserId)) === LOADED
    };
  },
  { fetchProject, fetchSpecSteps, saveResults, fetchCancel }
)(ComparePage);