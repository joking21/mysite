import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import store from './store';
// import 'antd/dist/antd.css';

ReactDOM.render((
  <Routes {...store} />
)
  , document.getElementById('root'));