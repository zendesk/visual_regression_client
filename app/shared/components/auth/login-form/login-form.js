import React from 'react';
import { TextInput } from 'zd-react-components';

const LoginForm = ({ username, password, onSubmit, onChange }) => (
  <div>
    <div>
      <TextInput
        value={username}
        onChangeText={value => onChange({ username: value, password })}
      />
    </div>
    <div>
      <TextInput
        value={password}
        valueType='password'
        onChangeText={value => onChange({ password: value, username })}
      />
    </div>
    <button onClick={onSubmit}>Login</button>
  </div>
)

export default LoginForm;