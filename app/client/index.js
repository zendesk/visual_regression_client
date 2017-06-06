import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import createStore from 'shared/create-store';
import App from 'shared/apps';
import { checkLoggedIn } from 'shared/actions/auth';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('entry')
);

// store.dispatch(checkLoggedIn()).then(() => {
//
// })
