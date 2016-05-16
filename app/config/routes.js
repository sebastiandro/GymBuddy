import React from 'react'
import Main from '../components/Main';
import Home from '../components/Home';
import FindGym from '../components/FindGym';
import { Route, IndexRoute, hashHistory } from 'react-router'

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
    <Route path="/find-gyms" component={FindGym} />
  </Route>
)
