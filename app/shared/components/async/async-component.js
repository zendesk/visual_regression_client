import React, { Component } from 'react';

const loadingStates = {
  LOADING: 'LOADING',
  LOADED: 'LOADED',
  FAILED: 'FAILED'
}

class AsyncComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      component: null,
      loadingState: loadingStates.LOADING
    };
    this.loadComponent();
  }

  componentWillMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false
  }

  loadComponent() {
    this.props.getComponent()
      .then(component => {
        if (!this.mounted) {
          return;
        }
        this.setState({
          component: component.default,
          loadingState: loadingStates.LOADED
        })
      })
      .catch(err => {
        console.error(err);
        if (!this.mounted) {
          return;
        }
        this.setState({
          loadingState: loadingStates.FAILED
        });
      })
  }

  render() {
    switch (this.state.loadingState) {
      case loadingStates.LOADING:
        const LoadingComponent = this.props.loadingComponent;
        return <LoadingComponent />
      case loadingStates.LOADED:
        const LoadedComponent = this.state.component;
        return <LoadedComponent {...this.props.componentProps} />
      default:
        const FailedComponent = this.props.failedComponent;
        return <FailedComponent />
    }
  }
}

export default AsyncComponent;