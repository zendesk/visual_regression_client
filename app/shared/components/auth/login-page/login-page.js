import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from 'shared/components/auth/login-form';
import { login } from 'shared/actions/auth';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    return (
      <LoginForm
        username={this.state.username}
        password={this.state.password}
        onChange={({ username, password }) => this.setState({ username, password })}
        onSubmit={() => this.props.login(this.state.username, this.state.password)}
      />
    );
  }
}

export default connect(
  undefined,
  { login }
)(LoginPage);