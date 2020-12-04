import ReactDOM from 'react-dom'
import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Layout from './layout/Layout'
function RouteWithSubRoutes({ routes }) {
  console.log(routes)
  return (
    <>
      {routes && routes.map((route, i) => <Route path={route.path} component={route.component} key={i}>  </Route>) || null}
    </>
  );
}

ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/' component={Layout}>
      </Route>
    </Switch>
  </Router>, document.getElementById('app'))
