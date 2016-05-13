import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import routes from './config/routes';
import { hashHistory } from 'react-router'

require('../public/assets/scss/app.scss');
require('../public/assets/scss/typography.scss');

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
);
