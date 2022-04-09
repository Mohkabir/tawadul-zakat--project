import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './assets/scss/style.scss';
import './assets/scss/home.scss';
import './assets/scss/about.scss';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import 'font-awesome/css/font-awesome.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
