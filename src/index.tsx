import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Router from './router';
import store from 'store/root';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

if (!!window && (window as any).Cypress) {
  (window as any).store = store;
}

serviceWorkerRegistration.register();
