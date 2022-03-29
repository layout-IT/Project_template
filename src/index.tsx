import React from 'react';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { STORE } from 'redux';

import reportWebVitals from './reportWebVitals';

import { App } from 'App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={STORE}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
