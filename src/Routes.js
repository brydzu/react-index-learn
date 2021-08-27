import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const routes = [
  //{
  //path: '/',
  //Component: HomePage,
  //exact: 'true',
  //}
];

export const Routes = () => (
  <Router>
    <Switch>
      {routes.map((route, index) => (
        <Route key={index} path={route.map} exact={route.exact}>
          <route.Component />
        </Route>
      ))}
    </Switch>
  </Router>
);
