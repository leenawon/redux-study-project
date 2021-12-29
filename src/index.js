import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import reduxStore from './reduxStore';

ReactDOM.render(
  <Provider store={reduxStore}>
    <App/>
  </Provider>, 
  document.getElementById("root")
  );