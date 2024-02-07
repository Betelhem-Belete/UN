import { createStore, compose } from 'redux';
import { applyMiddleware } from 'redux';

import { thunk } from 'redux-thunk';
// const thunk = require('redux-thunk').default;

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import reducers from './reducers';
import App from './App';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
