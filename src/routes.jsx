import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import Main from './components/Main';
import Topic from './components/Topic';
import ImageDetail from './components/ImageDetail';

export default (
  <Router history={hashHistory} >
    <Route path="/" component={Main}>
      <Route path="topics/:id" component={Topic} />
      <Route path="images/:id" component={ImageDetail} />
    </Route>
  </Router>
)
