import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';
import { Provider } from "mobx-react";


// Provide与redux类似, 把利用context把store注入全局中
ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
