import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import Routes from './routes';
import store from './store';
import '../src/style/main.less';

console.log(store);
ReactDOM.render((
  <Provider {...store}>
      <Routes />
  </Provider>
)
  , document.getElementById('root'));