import React from 'react';
import ReactRouter, {Router, Route, hashHistory} from 'react-router';
import Main from './components/Main';

export default (
  <Router history={hashHistory} >
    <Route path="/" component={Main}>
    </Route>
  </Router>
)
